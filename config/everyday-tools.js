window.HODGELABS_CONFIG_PARTS = window.HODGELABS_CONFIG_PARTS || {};

window.HODGELABS_CONFIG_PARTS.everydayTools = {
    title: "Everyday Tools",
    description: "Daily-use utilities, diagnostics, AI tools, hardware checks, and hidden gems.",
    subcategories: [
        {
            title: "File / Download Tools",
            description: "Resources for downloads, file conversion, media extraction, compression, transfer, and quick utilites.",
            links: [
                {
                    name: "7-Zip",
                    url: "https://www.7-zip.org",
                    description: "A trusted compression and archive utility for extracting, creating, and managing many file formats.",
                    tags: ["tools", "files", "compression"]
                },
                {
                    name: "FilePizza",
                    url: "https://file.pizza",
                    description: "A peer-to-peer browser file sharing tool great for quick direct transfers without cloud storage.", 
                    tags: ["tools", "files", "sharing"]
                },
                {
                    name: "Send",
                    url: "https://send.vis.ee",
                    description: "A secure temporary file sharing service inspired by Firefox Send for quick encrypted transfers.",
                    tags: ["tools", "files", "privacy"]
                },
                {
                    name: "TinyWow",
                    url: "https://tinywow.com",
                    description: "A practical collection of PDF, image, video, and document conversion tools in one place.",
                    tags: ["tools", "files", "conversion"]
                },
                {
                    name: "CloudConvert",
                    url: "https://cloudconvert.com",
                    description: "A powerful cloud-bassed converter for documents, videos, audio, archieves, and images.",
                    tags: ["tools", "files", "conversion"]
                },
                {
                    name: "Handbrake",
                    url: "https://handbrake.fr",
                    description: "A trusted video transcoding tool for compressing, converting, and optimizing media files.",
                    tags: ["tools", "video", "conversion"]
                },
                {
                    name: "yt-dlp",
                    url: "https://github.com/yt-dlp/yt-dlp",
                    description: "A powerful open-source media downloader for extracting audio and video from supported sites.",
                    tags: ["tools", "downloads", "media"]
                },
                {
                    name: "JDownloader",
                    url: "https://jdownloader.org",
                    description: "A download manager for handling multi-part downloads, captchas, archives, and link collections.",
                    tags: ["tools", "downloads", "manager"]
                }
            ]
        },
        {
            title: "Networking / Internet",
            description: "Resources for DNS lookups, IP checks, speed tests, SSL validation, HTTP debugging, and network troubleshooting.",
            links: [
                {
                    name: "Speedtest", 
                    url: "https://www.speedtest.net",
                    description: "A widely used internet speed test for bandwidth, latency, and connection quality checks.",
                    tags: ["tools", "network", "speedtest"]
                },
                {
                    name: "Fast",
                    url: "https://fast.com", 
                    description: "A minimalist Netflix-powered internet speed test focused on quick throughput checks.",
                    tags: ["tools", "network", "speedtest"]
                },
                {
                    name: "MXToolbox",
                    url: "https://mxtoolbox.com",
                    description: "A powerful DNS, MX, blacklist, and domain torubleshooting toolkit.",
                    tags: ["tools", "network", "dns"]
                },
                {
                    name: "WhatsMyDNS",
                    url: "https://www.whatsmydns.net",
                    description: "A global DNS propagation checker useful for domain and homelab public service changes.",
                    tags: ["tools", "network", "dns"]
                },
                {
                    name: "DNS Checker",
                    url: "https://dnschecker.org",
                    description: "A DNS propagation and record validation tool for domains, services, and public endpoints.",
                    tags: ["tools", "network", "dns"]
                },
                {
                    name: "IP Chicken", 
                    url: "https://ipchicken.com",
                    description: "A fast public IP checker useful for VPN, ISP, and homelab WAN troubleshooting.",
                    tags: ["tools", "network", "dns"]
                },
                {
                    name: "CanYouSeeMe",
                    url: "https://canyouseeme.org",
                    description: "A quick external port checker for vaildating exposed homelab services and firewall rules.",
                    tags: ["tools", "network", "ports"]
                },
                {
                    name: "SSL Labs",
                    url: "https://www.ssllabs.com/ssltest/",
                    description: "A deep SSL/TLS analyzer for validating certificates, ciphers, and reverse proxy security.",
                    tags: ["tools", "network", "latency"]
                },
                {
                    name: "Ping.pe",
                    url: "https://ping.pe",
                    description: "A global ping and traceroute testing platform for latency and route diagnostics.",
                    tags: ["tools", "network", "latency"]
                },
                {
                    name: "HTTP Status",
                    url: "https://httpstatus.io",
                    description: "A redirect chain and HTTP header inspection tool useful for reverse proxies and CDN debugging.",
                    tags: ["tools", "network", "http"]
                }
            ]
        },
        {
            title: "Privacy / Security",
            description: "Resources for leak checks, password hygiene, malware scanning, secure browsing, aliases, DNS safety, and everyday digital security.",
            links: [
                {
                    name: "Have I Been Pwned",
                    url: "https://haveibeenpwned.com",
                    description: "The gold-stanard breach notification service for checking whether your email addresses or passwords have appeared in known data breaches.",
                    tags: ["tools", "privacy", "breach"]
                },
                {
                    name: "VirusTotal",
                    url: "https://virustotal.com",
                    description: "A must-have malware scanning and reputation platform for files, URLs, hashes, and domains.",
                    tags: ["tools", "security", "malware"]
                },
                {
                    name: "URLVoid",
                    url: "https://urlvoid.com",
                    description: "A quick URL reputation checker useful for validating susicious links before opening them.",
                    tags: ["tools", "security", "url"]
                },
                {
                name: "AbuseIPDB",
                    url: "https://abuseipdb.com",
                    description: "A reputation and abuse reporting database for checking malicious IP addresses and scanners.",
                    tags: ["tools", "security", "ip"]
                },
                {
                    name: "SimpleLogin",
                    url: "https://simplelogin.io",
                    description: "A privacy-first email aliasing service that helps protect your real inbox and reduce spam exposure.",
                    tags: ["tools", "privacy", "email"]
                },
                {
                    name: "10 Minute Mail",
                    url: "https://10minutemail.com",
                    description: "A disposable email inbox for quick signups, testing, and reducing spam risk.",
                    tags: ["tools", "privacy", "email"]
                },
                {
                    name: "PrivacyGuides",
                    url: "https://www.privacyguides.org",
                    description: "A curated privacy knowledge base for secure tools, apps, browsers, email, and best practices.",
                    tags: ["tools", "privacy", "guides"]
                },
                {
                    name: "DNS Leak Test",
                    url: "https://www.dnsleaktest.com",
                    description: "A quick DNS leak checker useful for validating VPN privacy and resolver behavior.",
                    tags: ["tools", "privacy", "dns"]
                },
                {
                    name: "BrowserLeak",
                    url: "https://browserleak.com",
                    description: "A browser fingerprinting and privacy exposure test suite for WebRTC, canvas, DNS, and more.",
                    tags: ["tools", "privacy", "browser"]
                },
                {
                    name: "Am I Unique",
                    url: "https://amiunique.org",
                    description: "A browser fingerprint uniqueness checker useful for understanding privacy exposure.",
                    tags: ["tools", "privacy", "fingerprinting"]
                }
            ]
        },
        {
            title: "PC Building / Benchmarks",
            description: "Resource for part compatability, hardware comparisons, thermals, PSU checks, Linux hardware validation, and performance benchmarking.",
            links: [
                {
                    name: "PCPartPicker",
                    url: "https://pcpartpicker.com",
                    description: "The best platform for part compatability, wattage estimates, build planning, and price comparisons.",
                    tags: ["tools", "pc", "builds"]
                },
                {
                    name: "Tom's Hardware GPU Hierarchy",
                    url: "https://www.tomshardware.com/reviews/gpu-hierarchy,4388.html",
                    description: "A trusted GPU ranking and performance comparison chart useful for upgrade decisions.",
                    tags: ["tools", "pc", "gpu"]
                },
                {
                    name: "TechPowerUp GPU Database",
                    url: "https://www.techpowerup.com/gpu-specs/",
                    description: "A deep GPU specification database for architecture, VRAM, thermals, and historical cards.",
                    tags: ["tools", "pc", "gpu"]
                },
                {
                    name: "CPU Monkey",
                    url: "https://passmark.com",
                    description: "A widely used benchmarking database for CPUs, GPUs, disks, and full system comparisons.",
                    tags: ["tools", "pc", "benchmarks"]
                },
                {
                    name: "UserBenchmark",
                    url: "https://www.userbenchmark.com",
                    description: "A quick component comparison tool useful for rough sanity checks and performance estimates.",
                    tags: ["tools", "pc", "comparison"]
                },
                {
                    name: "DisplaySpecifications",
                    url: "https://www.displayspecifications.com",
                    description: "A monitor and display database useful for tablets, wall dashboards, and PC monitor research.",
                    tags: ["tools", "pc", "display"]
                },
                {
                    name: "CrystalDiskMark",
                    url: "https://crystalmark.info/en/software/crystaldiskmark/",
                    description: "A storage benchmarking tool for SSDs, NVMe drives, and homelab disk performance checks.",
                    tags: ["tools", "pc", "storage"]
                },
                {
                    name: "MemTest86",
                    url: "https://www.memtest86.com",
                    description: "A trusted RAM stability and memory diagnostics tool useful for Linux and server troubleshootin.",
                    tags: ["tools", "pc", "memory"]
                }
            ]
        },
        {
            title: "AI / Productivity",
            description: "Resources for writing acceleration, coding copilots, summerization, OCR, transcription, diagramming, note systems, and workflow automation.",
            links: [
                {
                    name: "ChatGPT",
                    url: "https://chat.openai.com",
                    description: "A versatile AI workspace for coding help, writing, brainstorming, architecture planning, and research workflows.",
                    tags: ["tools", "ai", "writing"]
                },
                {
                    name: "Claude",
                    url: "https://claude.ai",
                    description: "A strong long-context AI assistant useful for document refinement, structured writing, and project planning.",
                    tags: ["tools", "ai", "research"]
                },
                {
                    name: "Perplexity",
                    url: "https://www.perplexity.ai",
                    description: "An AI-powered research engine focused on fast source-backed exploration and discovery.",
                    tags: ["tools", "ai", "notes"]
                },
                {
                    name: "NotebookLM",
                    url: "https://notebooklm.google.com",
                    description: "A document-grounded AI notebook system execellent for learning paths, repo planning, and knowledge synthesis.",
                    tags: ["tools", "ai", "notes"]
                },
                {
                    name: "Obsidian",
                    url: "https://obsidian.md",
                    description: "A markdown-first knowledge management tool ideal for linked notes, system design maps, and project documentation.",
                    tags: ["tools", "productivity", "notes"]
                },
                {
                    name: "Notion",
                    url: "https://www.notion.so",
                    description: "A flexible workspace for dashboards, project planning, docs, databases, and personal systems.",
                    tags: ["tools", "productivity", "planning"]
                },
                {
                    name: "Excalidraw",
                    url: "https://excalidraw.com",
                    description: "A clean diagramming and whiteboarding tool perfect for system maps, homelab layouts, and UI sketches.",
                    tags: ["tools", "productivity", "diagramming"]
                },
                {
                    name: "Tldraw",
                    url: "https://tldraw.com",
                    description: "A fast infinite canvas tool great for wireframes, architecture ideas, and quick viusal planning.",
                    tags: ["tools", "productivity", "whiteboard"]
                },
                {
                    name: "Whisper Web",
                    url: "https://huggingface.co/spaces/opanai/whisper",
                    description: "A speech-to-text transcription tool useful for converting audio notes into documentation.",
                    tags: ["tools", "ai", "transcription"]
                },
                {
                    name: "OCR Space",
                    url: "https://ocr.space",
                    description: "A quick OCR tool for extracting text from screenshots, scans, PDFs, and technical diagrams.",
                    tags: ["tools", "ai", "ocr"]
                }
            ]
        },
        {
            title: "General Utilities",
            description: "Unique browseribased utilities for maps, weather, conversations, package tracking, quick calculations, and hidden-gem everyday helpers.",
            links: [
                {
                    name: "Windy",
                    url: "https://www.windy.com",
                    description: "A beautiful interactive weather map with radar, wind layers, storms, air quality, and detailed forecasts.",
                    tags: ["tools", "weather", "maps"]
                },
                {
                    name: "Radio Garden",
                    url: "https://radio.garden",
                    description: "A globe-based radio exploration site that let's you instantly tune into live stations around the world.",
                    tags: ["tools", "audio", "exploration"]
                },
                {
                    name: "FlightRadar24",
                    url: "https://flightradar24.com",
                    description: "A live global flight tracking map perfect for travel, curiosity, and aviation discovery.",
                    tags: ["tools", "flight", "map"]
                },
                {
                    name: "Marine Traffic",
                    url: "https://www.marinetraffic.com",
                    description: "A real-time global ship tracking platform useful for logistics and maritime discovery.",
                    tags: ["tools", "maritime", "map"]
                },
                {
                    name: "Time.is",
                    url: "https://time.is",
                    description: "A precise world time and timezone comparison tool with great visual clarity.",
                    tags: ["tools", "time", "timezone"]
                },
                {
                    name: "UnitConverters",
                    url: "https://unitconverters.net",
                    description: "A fast browser conversion tool.",
                    tags: ["tools", "units", "measure"]
                }
            ]
        }
    ]
};
