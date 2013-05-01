/*global TurbulenzEngine: false*/
/*global Application: false*/
/*global Protolib: false*/

/*{% if tz_development %}*/
/*{{ javascript("scripts/configdebug.js") }}*/
/*{% elif not tz_development %}*/
/*{{ javascript("scripts/configrelease.js") }}*/
/*{% endif %}*/

/*{{ javascript('jslib/camera.js') }}*/
/*{{ javascript('jslib/requesthandler.js') }}*/
/*{{ javascript('jslib/texturemanager.js') }}*/
/*{{ javascript('jslib/shadermanager.js') }}*/
/*{{ javascript('jslib/soundmanager.js') }}*/
/*{{ javascript('jslib/effectmanager.js') }}*/
/*{{ javascript('jslib/fontmanager.js') }}*/
/*{{ javascript('jslib/observer.js') }}*/
/*{{ javascript('jslib/utilities.js') }}*/
/*{{ javascript('jslib/services/turbulenzbridge.js') }}*/
/*{{ javascript('jslib/services/turbulenzservices.js') }}*/
/*{{ javascript('jslib/services/gamesession.js') }}*/
/*{{ javascript('jslib/services/mappingtable.js') }}*/

/*{{ javascript('jslib/scene.js') }}*/
/*{{ javascript('jslib/light.js') }}*/
/*{{ javascript('jslib/material.js') }}*/
/*{{ javascript('jslib/geometry.js') }}*/
/*{{ javascript('jslib/aabbtree.js') }}*/
/*{{ javascript('jslib/scenenode.js') }}*/
/*{{ javascript('jslib/vertexbuffermanager.js') }}*/
/*{{ javascript('jslib/indexbuffermanager.js') }}*/
/*{{ javascript('jslib/resourceloader.js') }}*/
/*{{ javascript('jslib/vmath.js') }}*/
/*{{ javascript('jslib/renderingcommon.js') }}*/
/*{{ javascript('jslib/forwardrendering.js') }}*/
/*{{ javascript('jslib/shadowmapping.js') }}*/
/*{{ javascript('jslib/draw2d.js') }}*/

/*{{ javascript('protolib/debughelpers.js') }}*/
/*{{ javascript('protolib/duimanager.js') }}*/
/*{{ javascript('protolib/jqueryextend.js') }}*/
/*{{ javascript('protolib/simplesprite.js') }}*/
/*{{ javascript('protolib/simplefonts.js') }}*/
/*{{ javascript('protolib/simplesceneloader.js') }}*/
/*{{ javascript('protolib/debugdraw.js') }}*/
/*{{ javascript('protolib/sceneloader.js') }}*/
/*{{ javascript('protolib/soundsourcemanager.js') }}*/
/*{{ javascript('protolib/protolib.js') }}*/

/*{{ javascript('scripts/protolibsampleapp.js') }}*/

TurbulenzEngine.onload = function onloadFn()
{
    var protolibConfig = Application.prototype.protolibConfig || {};
    var intervalID;
    protolibConfig.onInitialized = function onInitializedFn(protolib)
    {
        var application = Application.create(protolib);
        var fps = protolibConfig.fps || 60;
        intervalID = TurbulenzEngine.setInterval(function ()
        {
            application.update();
        }, 1000 / fps);

        TurbulenzEngine.onunload = function onUnloadFn()
        {
            if (intervalID)
            {
                TurbulenzEngine.clearInterval(intervalID);
                intervalID = null;
            }
            if (application && application.destroy)
            {
                application.destroy();
                application = null;
            }
        };

    };
    Protolib.create(protolibConfig);
};
