window.HODGELABS_CONFIG_PARTS = window.HODGELABS_CONFIG_PARTS || {};

window.HODGELABS_CONFIG_PARTS.homelab = {
    title: "Self-Hosting / Homelab",
    description: "Infasttucture, Raspberry Pi, automation, networking, and secure self-hosting.",
    subcategories: [
        {
            title: "Core Services",
            description: "Essential self-hosted services for media, passwords, dashboards, notes, file sync, and core home infastructure.",
            links: [
                {
                    name: "Jellyfin",
                    url: "https://jellyfin.org",
                    description: "A fully open-source media server for movies, TV, music, and streaming across your devices.",
                    tags: ["homelab", "media", "streaming"]
                },
                {
                    name: "Pi-Hole",
                    url: "https://pi-hole.net",
                    description: "A network-wide DNS sinkhole that blocks ads, trackers, and malious domains across your home network.",
                    tags: ["homelab", "dns", "networking"]
                },
                {
                    name: "Vaultwarden",
                    url: "https://github.com/dani-garcia/vaultwarden",
                    description: "A lightweight self-hosted Bitwarden-compatible password manager perfect for home lab deployments.",
                    tags: ["homelab", "security", "passwords"]
                },
                {
                    name: "Nextcloud",
                    url: "https://nextcloud.com",
                    description: "A self-hosted cloud platform for files, notes, calendars, contacts, and collaboration.",
                    tags: ["homelab", "storage", "cloud"]
                },
                {
                    name: "Immich",
                    url: "https://immich.app",
                    description: "A self-hosted photo and video backup platform with an experience similar to Google Photos.",
                    tags: ["homelab", "photos", "backups"]
                },
                {
                    name: "Mealie",
                    url: "https://mealie.io",
                    description: "A modern self-hosted recipe manager with meal planning, shopping lists, and family-friendly sharing.",
                    tags: ["homelab", "productivity", "family"]
                },
                {
                    name: "Paperless-ngx",
                    url: "https://docs.paperless-ngx.com",
                    description: "A document management system for scanning, OCR, organizing, and searching household paperwork.",
                    tags: ["homelab", "documents", "ocr"]
                },
                {
                    name: "Homepage",
                    url: "https://gethomepage.dev",
                    description: "A self-hosted dashboard for organizing services, widgets, bookmarks, and homelab status.",
                    tags: ["homelab", "dashboard", "ui"]
                }
            ]
        },
        {
            title: "Raspberry Pi / ESP",
            description: "Resources for Raspberry Pi, ESP32, ESP8266, edge systems, IoT dashboards, sensors, kiosk, and lightweight embedded infrastructure.",
            links: [
                {
                    name: "Raspberry Pi",
                    url: "https://www.raspberrypi.com",
                    description: "The offical Raspberry Pi ecosystem for hardware, OS images, accessories, and project resources.",
                    tags: ["homelab", "raspberry-pi", "hardware"]
                },
                {
                    name: "PiMyLifeUp",
                    url: "https://pimylifeup.com",
                    description: "A huge Raspberry Pi project and tutorial site covering servers, kiosks, dashboards, and home services.",
                    tags: ["homelab", "raspberry-pi", "projects"]
                },
                {
                    name: "ESPHome",
                    url: "https://esphome.io",
                    description: "A firmware framework for ESP devices that integrates cleanly into Home Assistant and smart home workflows.",
                    tags: ["homelab", "esp", "automation"]
                },
                {
                    name: "WLED",
                    url: "https://kno.wled.ge",
                    description: "A highly popular ESP-board smart LED controller platform with dashboards, effects, and Home Assistant integrations.",
                    tags: ["homelab", "esp", "lighting"]
                },
                {
                    name: "Random Nerd Tutorials",
                    url: "https://randomnerdtutorials.com",
                    description: "One of the best practical sites for ESP32, ESP8266, Raspberry Pi, and IoT sensor projects.",
                    tags: ["homelab", "esp", "projects"]
                },
                {
                    name: "CircuitDigest ESP32 Projects",
                    url: "https://circuitdigest.com/esp32-projects",
                    description: "A project collection focused on ESP32 sensors, displays, automation, and embedded experimentation.",
                    tags: ["homelab", "esp", "projects"]
                },
                {
                    name: "Balena",
                    url: "https://balena.io",
                    description: "A deployment platform for managing Raspberry Pi fleets, kiosks, edge systems, and IoT devices.",
                    tags: ["homelab", "raspberry-pi", "deployment"]
                },
                {
                    name: "MagicMirror",
                    url: "https://magicmirror.builders",
                    description: "A customizable dashboard and smart display platform often used with Raspberry Pi screens and wall tablets.",
                    tags: ["homelab", "raspberry-pi", "dashboard"]
                },
                {
                    name: "Pimoroni",
                    url: "https://shop.pimoroni.com",
                    description: "A premium Raspberry Pi accessory and add-on ecosystem for displays, sensors, cases, and experimentation hardware.",
                    tags: ["homelab", "raspberry-pi", "hardware"]
                }
            ]
        },
        {
            title: "Containers / Orchestration",
            description: "Resources for  Docker, Compose stacks, container networking, reverse proxies, lightweight clusters, and service orchestration.",
            links: [
                {
                    name: "Docker",
                    url: "https://www.docker.com",
                    description: "The leading container platform for packaging and running services consistently across devices and servers.",
                    tags: ["homelab", "containers", "docker"]
                },
                {
                    name: "Docker Hub",
                    url: "https://hub.docker.com",
                    description: "The primary registry for discovering and pulling container images for self-hosted services.",
                    tags: ["homelab", "containers", "registry"]
                },
                {
                    name: "Awesome Compose",
                    url: "https://github.com/docker/awesome-compose",
                    description: "A curated collection of Docker Compose examples for quickly deploying multi-service stacks.",
                    tags: ["homelab", "docker", "compose"]
                },
                {
                    name: "Portainer",
                    url: "https://portainer.io",
                    description: "A visual container management dashboard for Docker, Compose, Swarm, and Kubernetes.",
                    tags: ["homelab", "docker", "dashboard"]
                },
                {
                    name: "Dockage",
                    url: "https://dockage.kuma.pet",
                    description: "A clean and lightweight Compose stack manager designed specifically for homelab workflows.",
                    tags: ["homelab", "docker", "compose"]
                },
                {
                    name: "Watchtower",
                    url: "https://containrr.dev/watchtower",
                    description: "A container auto-update service for keeping homelab stacks patched and refreshed.",
                    tags: ["homelab", "docker", "automation"]
                },
                {
                    name: "Traefik",
                    url: "https://traefik.io",
                    description: "A modern reverse proxy and ingress controller ideal for routing self-hosted services cleanly.",
                    tags: ["homelab", "networking", "proxy"]
                },
                {
                    name: "Nginx Proxy Manager",
                    url: "https://nginxproxymanager.com",
                    description: "A simple GUI for reverse proxies, SSL certifications, and exposing Homelab services safely.",
                    tags: ["homelab", "networking", "proxy"]
                },
                {
                    name: "K3s",
                    url: "https://k3s.io",
                    description: "A lightweight Kubernetes distribution perfect for Raspberry Pi clusters and homelab orchestration.",
                    tags: ["homelab", "kubernetes", "cluster"]
                },
                {
                    name: "Helm",
                    url: "https://helm.sh",
                    description: "The package manager for Kubernetes used to deploy and manage complex services cleanly.",
                    tags: ["homelab", "kubernetes", "packages"]
                }
            ]
        },
        {
            title: "Networking / DNS",
            description: "Resources for DNS, DHCP, firewalls, VPNs, reverse proxies, local domains, secure remote access, and network observability.",
            links: [
                {
                    name: "Pi-Hole",
                    url: "https://pi-hole.net",
                    description: "A network-wide DNS sinkhole that blocks ads, trackers, and malicious domains across your entire home network.",
                    tags: ["homelab", "dns", "networking"]
                },
                {
                    name: "AdGuard Home",
                    url: "https://adguard.com/en/adguard-home/overview.html",
                    description: "A strong Pi-hole alternative with DNS filtering, parental controls, and a polished dashboard.",
                    tags: ["homelab", "dns", "privacy"]
                },
                {
                    name: "Unbound",
                    url: "https://ninelabs.nl/projects/unbound/about/",
                    description: "A vaildating recursive DNS resolver often paired with Pi-hole for private local DNS resolution.",
                    tags: ["homelab", "dns", "resolver"]
                },
                {
                    name: "Technitium DNS",
                    url: "https://technitium.com/dns/",
                    description: "A powerful DNS server with filtering, authoritative zones, and local network management features.",
                    tags: ["homelab", "dns", "server"]
                },
                {
                    name: "Tailscale",
                    url: "https://tailscale.com",
                    description: "A simple Wireguard-based mesh VPN for securely accessing your homelab from anywhere.",
                    tags: ["homelab", "vpn", "security"]
                },
                {
                    name: "WireGuard",
                    url: "https://www.wireguard.com",
                    description: "A modern, fast, and secure VPN protocol ideal for private access to your self-hosted services.",
                    tags: ["homelab", "vpn", "security"]
                },
                {
                    name: "NetBird",
                    url: "https://netbird.io",
                    description: "A WireGuard-based secure remote access platform with strong homelab and team-friendly workflows.",
                    tags: ["homelab", "vpn", "mesh"]
                },
                {
                    name: "OPNsense",
                    url: "https://opensense.org",
                    description: "An advanced open-source firewall and router platform for segmentation, IDS, VPNs, and DNS control.",
                    tags: ["homelab", "firewall", "networking"]
                },
                {
                    name: "pfSense",
                    url: "https://www.pfsense.org",
                    description: "A highly capable firewall and router OS widely used for advanced home and lab networking.",
                    tags: ["homelab", "firewall", "routing"]
                },
                {
                    name: "Nginx Proxy Manager",
                    url: "https://nginxproxymanager.com",
                    description: "A simple GUI for routing local domains, SSL certificates, and safely exposing services.",
                    tags: ["homelab", "proxy", "ssl"]
                }
            ]
        },
        {
            title: "Monitoring / Dashboards",
            description: "Resources for uptime monitoring, service health, logs, metrics, dashboards, Raspberry Pi displays, and infrastructure observability.",
            links: [
                {
                    name: "Grafana",
                    url: "https://grafana.com",
                    description: "The industry-standard platform for dashboards, observability, time-series graphs, and infrastructure visibility.",
                    tags: ["homelab", "monitoring", "dashboards"]
                },
                {
                    name: "Promthus",
                    url: "https://promethus.io",
                    description: "A metrics collection and alerting system used to power dashboards and infrastructure visibility.",
                    tags: ["homelab", "monitoring", "metrics"]
                },
                {
                    name: "Uptime Kuma",
                    url: "https://uptime.kuma.pet",
                    description: "A clean self-hosted uptime monitoring dashboard perfect for service health checks and status pages.",
                    tags: ["homelab", "monitoring", "uptime"]
                },
                {
                    name: "Netdata",
                    url: "https://www.netdata.cloud",
                    description: "A real-time monitoring platform for servers, containers, apps, and network visibility.",
                    tags: ["homelabs", "monitoring", "servers"]
                },
                {
                    name: "Glances",
                    url: "https://nicolargo.github.io/glances/",
                    description: "A lightweight system monitoring tool great for Raspberry Pi dashboards and quick infrastructure checks.",
                    tags: ["homelab", "monitoring", "system"]
                },
                {
                    name: "Beszel",
                    url: "https://github.com/henrygd/beszel",
                    description: "A modern lightweight homelab monitoring dashboard for multiple servers and services.",
                    tags: ["homelab", "monitoring", "dashboard"]
                },
                {
                    name: "Homepage",
                    url: "https://gethomepage.dev",
                    description: "A polished dashboard homepage for organizing services, widgets, bookmarks, and infrastructure status.",
                    tags: ["homelab", "dashboard", "ui"]
                },
                {
                    name: "Homarr",
                    url: "https://homarr.dev",
                    description: "A self-hosted dashboard designed specifically for homelab service visibility and quick launching.",
                    tags: ["homelab", "dashboard", "services"]
                },
                {
                    name: "MagicMirror",
                    url: "https://magicmirror.builders",
                    description: "A Raspberry Pi-friendly smart display dashboard ideal for wall tablets, kiosks, and ambient data screens.",
                    tags: ["homelabs", "dashboard", "raspberry-pi"]
                },
                {
                    name: "Kasm Workspaces",
                    url: "https://kasmweb.com",
                    description: "A browser-based workspace platform useful for dashbaords, secure browsing sessions, and kiosk-style environments.",
                    tags: ["homelab", "dashboard", "workspace"]
                }
            ]
        },
        {
            title: "Automation / Smart Home",
            description: "Resources for Home Assistant, ESPHome automations, dashboards, lighting, sensors, presence, notifications, and smart home orchestration.",
            links: [
                {
                    name: "Home Assistant",
                    url: "https://www.home-assistant.io",
                    description: "The leading open-source smart home platform for automations, dashboards, integrations, and local-first control.",
                    tags: ["homelab", "automation", "dashboard"]
                },
                {
                    name: "ESPHome",
                    url: "https://esphome.io",
                    description: "A firmware framework for ESP devices that integrates seamlessly into Home Assistant automations and sensors.",
                    tags: ["homelab", "automation", "esp"]
                },
                {
                    name: "WLED",
                    url: "https://kno.wled.ge",
                    description: "A powerful ESP-based lighting platform for addressable LEDs, effects, and Home Assistant scenes.",
                    tags: ["homelab", "automation", "lighting"]
                },
                {
                    name: "Node-RED",
                    url: "https://nodered.org",
                    description: "A flow-based automation platform perfect for smart home logic, event routing, and custom workflows.",
                    tags: ["homelab", "automation", "flows"]
                },
                {
                    name: "Frigate",
                    url: "https://frigate.video",
                    description: "A self-hosted NVR and AI-powered camera detection platform that integrates deeply with Home Assistant.",
                    tags: ["homelab", "automation", "cameras"]
                },
                {
                    name: "Scrypted",
                    url: "https://www.scrypted.app",
                    description: "A smart home bridge platform for cameras, notifications, HomeKit, and advanced video workflows.",
                    tags: ["homelab", "automation", "cameras"]
                },
                {
                    name: "MagicMirror",
                    url: "https://magicmirror.builders",
                    description: "A Raspberry Pi-friendly smart display platform for wall dashboards, calendars, weather, and ambient data.",
                    tags: ["homelab", "automation", "dashboard"]
                },
                {
                    name: "Fully Kiosk",
                    url: "https://www.fully-kiosk.com",
                    description: "A kiosk browser platform ideal for turning tablets into dedicated Home Assistant wall panels.",
                    tags: ["homelab", "automation", "tablet"]
                },
                {
                    name: "MQTT",
                    url: "https://mqtt.org",
                    description: "The messaging backbone commonly used for IoT devices, sensors, and smart home communication.",
                    tags: ["homelab", "automation", "iot"]
                },
                {
                    name: "Zigbee2MQTT",
                    url: "https://www.zigbee2mqtt.io",
                    description: "A bridge platform for integrating Zigbee devices into MQTT and Home Assistant ecosystems.",
                    tags: ["homelab", "automation", "zigbee"]
                }
            ]
        },
        {
            title: "Learning / Labs",
            description: "Resources for homelab inspiration, deployment walkthroughs, stack ideas, cyber crossover labs, and safe infrastructure experimentation.",
            links: [
                {
                    name: "Awesome Selfhosted",
                    url: "https://github.com/awesome-selfhosted/awesome-selfhosted",
                    description: "The gold standard curated list of self-hosted software across nearly every service category.",
                    tags: ["homelab", "learning", "services"]
                },
                {
                    name: "r/selfhosted",
                    url: "https://www.reddit.com/r/selfhosted",
                    description: "A strong community for discovering new services, deployment ideas, dashboards, and stack inspiration.",
                    tags: ["homelab", "communtiy", "labs"]
                },
                {
                    name: "r/homelab",
                    url: "https://www.reddit.com/r/homelab",
                    description: "A community focused on racks, servers, Raspoberry Pi clusters, networking, and infrastructure experimentation.",
                    tags: ["homelab", "learning", "infrastructure"]
                },
                {
                    name: "Awesome Homelab",
                    url: "https://github.com/awesome-foss/awesome-sysadmin",
                    description: "A curated collection of infrastructure, monitoring, networking, and deployment tools useful for lab experimentation.",
                    tags: ["homelab", "learning", "infrastructure"]
                },
                {
                    name: "PiMyLifeUp",
                    url: "https://pimylifeup.com",
                    description: "A fantastic project and walkthrough site for Raspberry Pi services, dashboards, and lightweight lab servers.",
                    tags: ["homelab", "raspberry-pi", "projects"]
                },
                {
                    name: "Techno Tim",
                    url: "https://technotim.live",
                    description: "A homelab-focused creator resource with stack walkthroughs, Docker labs, and service deployment guides.",
                    tags: ["homelab", "learning", "docker"]
                },
                {
                    name: "Awesome Docker",
                    url: "https://github.com/docker/awesome-compose",
                    description: "A collection of ready-to-deploy multi-service Compose stacks for safe homelab experimentation.",
                    tags: ["homelab", "docker", "compose"]
                },
                {
                    name: "LinuxServer",
                    url: "https://linuxserver.io",
                    description: "One of the best resources for clean Docker images and deployment patterns for self-hosted app.",
                    tags: ["homelab", "docker", "services"]
                },
                {
                    name: "Kasm Workspaces",
                    url: "https://www.kasmweb.com",
                    description: "A browser-based workspace environment useful for lab isolation, safe browsing, and cyber experimentation.",
                    tags: ["homelab", "labs", "security"]
                }
            ]
        }
    ]
};
