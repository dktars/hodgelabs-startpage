// app.js
(() => {
  "use strict";

  const state = {
    libraryQuery: "",
    expandedMasters: new Set(),
    expandedSubcategories: new Set(),
    expandedSections: new Set()
  };

  function $(id) {
    return document.getElementById(id);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getConfig() {
    return window.START_PAGE_CONFIG || { quickLinks: [], categories: [] };
  }

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }

  function updateGreeting() {
    const greetingEl = $("greeting");
    if (!greetingEl) return;

    const config = getConfig();
    const name = config.profile?.displayName || "Friend";
    greetingEl.textContent = `${getGreeting()}, ${name}`;
  }

  function updateClock() {
    const timeEl = $("time");
    if (!timeEl) return;

    timeEl.textContent = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function initHeader() {
    updateGreeting();
    updateClock();
    setInterval(() => {
      updateGreeting();
      updateClock();
    }, 1000);
  }

  function renderQuickLinks() {
    const quickLinksEl = $("quickLinks");
    if (!quickLinksEl) return;

    const config = getConfig();
    const quickLinks = Array.isArray(config.quickLinks) ? config.quickLinks : [];

    quickLinksEl.innerHTML = quickLinks
      .map((link) => {
        const label = escapeHtml(link.label);
        const url = escapeHtml(link.url);
        return `
          <a class="quick-link" href="${url}" target="_blank" rel="noopener noreferrer">
            ${label}
          </a>
        `;
      })
      .join("");
  }

  function initSearchForm() {
    const form = $("searchForm");
    const input = $("searchInput");
    const config = getConfig();

    if (!form || !input) return;

    input.placeholder = config.search?.placeholder || "Search the web...";

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const raw = input.value.trim();
      if (!raw) return;

      const action = config.search?.action || "https://duckduckgo.com/";
      const queryParam = config.search?.queryParam || "q";
      const url = new URL(action);
      url.searchParams.set(queryParam, raw);
      window.location.href = url.toString();
    });
  }

  function matchesQuery(parts, query) {
    if (!query) return true;

    const haystack = parts
      .flat()
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return haystack.includes(query.toLowerCase());
  }

  function buildSearchParts({ master, subcategory, section, link }) {
    return [
      master?.title,
      master?.description,
      subcategory?.title,
      subcategory?.description,
      section?.title,
      section?.description,
      link?.name,
      link?.description,
      link?.url,
      ...(Array.isArray(link?.tags) ? link.tags : [])
    ];
  }

  function masterKey(masterIndex) {
    return `master-${masterIndex}`;
  }

  function subcategoryKey(masterIndex, subIndex) {
    return `sub-${masterIndex}-${subIndex}`;
  }

  function sectionKey(masterIndex, subIndex, sectionIndex) {
    return `section-${masterIndex}-${subIndex}-${sectionIndex}`;
  }

  function toggleSetValue(setRef, key) {
    if (setRef.has(key)) {
      setRef.delete(key);
    } else {
      setRef.add(key);
    }
  }

  function renderTags(tags) {
    if (!Array.isArray(tags) || tags.length === 0) return "";

    return `
      <div class="tags">
        ${tags
          .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
          .join("")}
      </div>
    `;
  }

  function renderLinkCard(link) {
    return `
      <a class="link-card" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">
        <div class="link-card__top">
          <h5 class="link-card__title">${escapeHtml(link.name)}</h5>
          <span class="link-card__arrow">↗</span>
        </div>
        <p class="link-card__description">${escapeHtml(link.description || "")}</p>
        ${renderTags(link.tags)}
      </a>
    `;
  }

  function getVisibleLinksFromSection(master, subcategory, section, query) {
    const links = Array.isArray(section?.links) ? section.links : [];
    return links.filter((link) =>
      matchesQuery(buildSearchParts({ master, subcategory, section, link }), query)
    );
  }

  function getVisibleDirectLinks(master, subcategory, query) {
    const links = Array.isArray(subcategory?.links) ? subcategory.links : [];
    return links.filter((link) =>
      matchesQuery(buildSearchParts({ master, subcategory, section: null, link }), query)
    );
  }

  function renderSection(master, subcategory, masterIndex, subIndex, section, sectionIndex, query) {
    const key = sectionKey(masterIndex, subIndex, sectionIndex);
    const visibleLinks = getVisibleLinksFromSection(master, subcategory, section, query);

    if (visibleLinks.length === 0) return "";

    const expanded = query ? true : state.expandedSections.has(key);

    return `
      <div class="section-block">
        <button class="section-toggle" data-section-key="${key}" type="button">
          <span class="section-toggle__icon">${expanded ? "▼" : "▶"}</span>
          <div class="section-toggle__content">
            <span class="section-toggle__title">${escapeHtml(section.title)}</span>
            ${
              section.description
                ? `<span class="section-toggle__description">${escapeHtml(section.description)}</span>`
                : ""
            }
          </div>
        </button>

        <div class="section-content ${expanded ? "expanded" : "collapsed"}">
          <div class="links-grid">
            ${visibleLinks.map(renderLinkCard).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderSubcategory(master, masterIndex, subcategory, subIndex, query) {
    const key = subcategoryKey(masterIndex, subIndex);
    const hasSections = Array.isArray(subcategory.sections) && subcategory.sections.length > 0;
    const directLinks = getVisibleDirectLinks(master, subcategory, query);

    let innerHtml = "";

    if (hasSections) {
      innerHtml = subcategory.sections
        .map((section, sectionIndex) =>
          renderSection(master, subcategory, masterIndex, subIndex, section, sectionIndex, query)
        )
        .join("");
    } else {
      if (directLinks.length > 0) {
        innerHtml = `
          <div class="links-grid">
            ${directLinks.map(renderLinkCard).join("")}
          </div>
        `;
      }
    }

    if (!innerHtml.trim()) return "";

    const expanded = query ? true : state.expandedSubcategories.has(key);

    return `
      <div class="subcategory-block">
        <button class="subcategory-toggle" data-subcategory-key="${key}" type="button">
          <span class="subcategory-toggle__icon">${expanded ? "▼" : "▶"}</span>
          <div class="subcategory-toggle__content">
            <h4 class="subcategory-toggle__title">${escapeHtml(subcategory.title)}</h4>
            ${
              subcategory.description
                ? `<p class="subcategory-toggle__description">${escapeHtml(subcategory.description)}</p>`
                : ""
            }
          </div>
        </button>

        <div class="subcategory-content ${expanded ? "expanded" : "collapsed"}">
          ${innerHtml}
        </div>
      </div>
    `;
  }

  function renderMasterCategory(master, masterIndex, query) {
    const key = masterKey(masterIndex);
    const subcategories = Array.isArray(master.subcategories) ? master.subcategories : [];

    const subHtml = subcategories
      .map((subcategory, subIndex) => renderSubcategory(master, masterIndex, subcategory, subIndex, query))
      .join("");

    if (!subHtml.trim()) return "";

    const expanded = query ? true : state.expandedMasters.has(key);

    return `
      <section class="master-category">
        <button class="master-toggle" data-master-key="${key}" type="button">
          <span class="master-toggle__icon">${expanded ? "▼" : "▶"}</span>
          <div class="master-toggle__content">
            <h2 class="master-toggle__title">${escapeHtml(master.title)}</h2>
            ${
              master.description
                ? `<p class="master-toggle__description">${escapeHtml(master.description)}</p>`
                : ""
            }
          </div>
        </button>

        <div class="master-content ${expanded ? "expanded" : "collapsed"}">
          ${subHtml}
        </div>
      </section>
    `;
  }

  function renderTree() {
    const treeRoot = $("treeRoot");
    if (!treeRoot) return;

    const config = getConfig();
    const categories = Array.isArray(config.categories) ? config.categories : [];
    const query = state.libraryQuery.trim();

    const html = categories
      .map((master, masterIndex) => renderMasterCategory(master, masterIndex, query))
      .join("");

    treeRoot.innerHTML =
      html.trim() ||
      `<div class="empty-state">No matching links found.</div>`;

    bindTreeEvents();
  }

  function bindTreeEvents() {
    document.querySelectorAll("[data-master-key]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.masterKey;
        toggleSetValue(state.expandedMasters, key);
        renderTree();
      });
    });

    document.querySelectorAll("[data-subcategory-key]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.subcategoryKey;
        toggleSetValue(state.expandedSubcategories, key);
        renderTree();
      });
    });

    document.querySelectorAll("[data-section-key]").forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.sectionKey;
        toggleSetValue(state.expandedSections, key);
        renderTree();
      });
    });
  }

  function initLibrarySearch() {
    const input = $("librarySearch");
    if (!input) return;

    input.addEventListener("input", (event) => {
      state.libraryQuery = event.target.value || "";
      renderTree();
    });
  }

  function initDefaultExpandedState() {
    const config = getConfig();
    const categories = Array.isArray(config.categories) ? config.categories : [];

    categories.forEach((master, masterIndex) => {
      state.expandedMasters.add(masterKey(masterIndex));

      const subcategories = Array.isArray(master.subcategories) ? master.subcategories : [];
      subcategories.forEach((subcategory, subIndex) => {
        state.expandedSubcategories.add(subcategoryKey(masterIndex, subIndex));

        const sections = Array.isArray(subcategory.sections) ? subcategory.sections : [];
        sections.forEach((_, sectionIndex) => {
          state.expandedSections.add(sectionKey(masterIndex, subIndex, sectionIndex));
        });
      });
    });
  }

  function init() {
    const config = getConfig();

    if (!config || !Array.isArray(config.categories)) {
      console.error("START_PAGE_CONFIG missing or invalid.");
      return;
    }

    initDefaultExpandedState();
    initHeader();
    renderQuickLinks();
    initSearchForm();
    initLibrarySearch();
    renderTree();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
