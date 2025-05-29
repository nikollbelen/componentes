// SCORM API Wrapper
let API = null;
let findAPITries = 0;

function findAPI(win) {
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        if (findAPITries > 500) {
            alert("Error al encontrar API");
            return null;
        }
        win = win.parent;
    }
    return win.API;
}

function getAPI() {
    if (API == null) {
        API = findAPI(window);
        if (API == null && window.opener != null && typeof(window.opener) != "undefined") {
            API = findAPI(window.opener);
        }
    }
    return API;
}

// Inicializar SCORM
function initializeSCORM() {
    const api = getAPI();
    if (api) {
        api.LMSInitialize("");
        api.LMSSetValue("cmi.core.lesson_status", "incomplete");
        api.LMSSetValue("cmi.core.score.min", "0");
        api.LMSSetValue("cmi.core.score.max", "100");
        api.LMSCommit("");
    }
}

// Finalizar SCORM
function finishSCORM() {
    const api = getAPI();
    if (api) {
        api.LMSSetValue("cmi.core.lesson_status", "completed");
        api.LMSSetValue("cmi.core.score.raw", "100");
        api.LMSFinish("");
    }
}

// Guardar progreso
function saveProgress(progress) {
    const api = getAPI();
    if (api) {
        api.LMSSetValue("cmi.core.lesson_location", progress);
        api.LMSCommit("");
    }
}

// Event Listeners
window.addEventListener('load', initializeSCORM);
window.addEventListener('beforeunload', finishSCORM); 