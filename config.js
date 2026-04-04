window.START_PAGE_CONFIG = {
    profile: {
        displayName: "Friend",
        subtitle: "Structured developer homepage - clean, scalable, and fast.",
    },

    search: {
        engineName: "DuckDuckGo",
        action: "https://duckduckgo.com/",
        queryParam: "q",
        placeholder: "Search the web . . ."
    },

    quickLinks: [
        { label: "Youtube", url: "https://youtube.com" },
        { label: "Reddit", url: "https://reddit.com" },
        { label: "ChatGPT", url: "https://chatgpt.com" },
        { label: "Claude", url: "https://claude.ai" },
        { label: "Gmail", url: "https://mail.google.com" },
        { label: "GitHub", url: "https://github.com" }
    ],

    categories: Object.values(window.HODGELABS_CONFIG_PARTS || {})
};
