// from https://github.com/joyqi/mobile-device-js
canvas = document.createElement('canvas');
gl = canvas.getContext('experimental-webgl');
debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
glRenderer = debugInfo == null ? 'unknown' : gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
userAgent = window.navigator.userAgent;
window.onload = function() {
    if (glRenderer.includes("A10") || glRenderer.includes("A8")) {
        if (userAgent.includes("10_3_2") || userAgent.includes("10_3_3")) {
            window.location.replace('https://lukezgd.github.io/MeridianFix/substrate');
        } else {
            window.location.replace('https://lukezgd.github.io/MeridianFix/substitute');
        }
    } else if (userAgent.includes("like Mac OS X")) {
        if (glRenderer.includes("A9")) {
            window.location.replace('https://lukezgd.github.io/tns-sockport/v0rtex');
        } else if (glRenderer.includes("A6")) {
            window.location.replace('https://ios.cfw.guide/installing-socket/');
        } else if (userAgent.includes("10_") {
            window.location.replace('https://lukezgd.github.io/tns-sockport');
        }
    }
};
