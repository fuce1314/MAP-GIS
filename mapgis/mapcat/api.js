const bmapcfg = {
	'imgext': '.jpg',
	'customstyle': '',
	'tiles_dir': '',
	'tiles_v_dir': '',
	'tiles_satellite_dir': '',
	'tiles_road_dir': '',
	'tiles_v_road_dir': '',
	'left_marker': true,
	'debug': false
};
var JS__FILE__ = document.currentScript ? document.currentScript.src: document.scripts[document.scripts.length - 1].src;
bmapcfg.home = JS__FILE__.substr(0, JS__FILE__.lastIndexOf("/"));
window.offLineIPAddress = bmapcfg.home;
console.log("%c初始化根目录地址:" + bmapcfg.home, "color: red; background: #030307; font-size: 20px;"); (function() {
	window.BMapGL_loadScriptTime = (new Date).getTime();
	document.write('<script type="text/javascript" src="/mapcat/getscript2023.js?type=webgl&v=1.0&ak=111111111&services=&t=20220830143644"></script>');
	document.write('<link rel="stylesheet" type="text/css" href="/mapcat/res/webgl/10/bmap.css"/>')
})();