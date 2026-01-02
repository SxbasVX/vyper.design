// Anti-copy and security protection
(function() {
    'use strict';
    
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Inspect)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable text selection on important elements
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable copy
    document.addEventListener('copy', function(e) {
        if (window.getSelection().toString().length > 50) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable drag
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });
    
    // Protect console
    if (typeof console !== 'undefined') {
        console.log('%c¡Alto ahí! 🛑', 'color: #0511F2; font-size: 30px; font-weight: bold;');
        console.log('%cEsta función del navegador es para desarrolladores.', 'font-size: 16px;');
        console.log('%cSi alguien te dijo que copies y pegues algo aquí, es un fraude.', 'font-size: 16px; color: red; font-weight: bold;');
        console.log('%c\nSitio protegido por Vyper Design - vyper.design', 'font-size: 14px; color: #0511F2;');
    }
})();
