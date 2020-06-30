var Stun = window.Stun || {};
var CONFIG = {
	root: '/test/',
	algolia: undefined,
	fontIcon: {
		"prompt": {
			"success": "fas fa-check-circle",
			"info": "fas fa-arrow-circle-right",
			"warning": "fas fa-exclamation-circle",
			"error": "fas fa-times-circle"
		},
		"copyBtn": "fas fa-copy"
	},
	sidebar: {
		"offsetTop": "20px",
		"tocMaxDepth": 6
	},
	header: undefined,
	postWidget: {
		"endText": true
	},
	nightMode: undefined,
	back2top: {
		"enable": true
	},
	codeblock: {
		"style": "default",
		"highlight": "light",
		"wordWrap": false
	},
	reward: false,
	fancybox: true,
	zoomImage: {
		"gapAside": "20px"
	},
	galleryWaterfall: undefined,
	lazyload: true,
	pjax: undefined,
	externalLink: {
		"icon": {
			"enable": true,
			"name": "fas fa-external-link-alt"
		}
	},
	shortcuts: undefined,
	prompt: {
		"copyButton": "复制",
		"copySuccess": "复制成功",
		"copyError": "复制失败"
	},
	sourcePath: {
		"js": "js",
		"css": "css",
		"images": "images"
	},
};

window.CONFIG = CONFIG;