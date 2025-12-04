
(function () {
    function press() {
        const el = document.getElementById('text');
        if (!el) {
            console.warn('Element with id "text" not found');
            return;
        }
        el.textContent = 'new one';
    }
    window.press = press;
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('button[data-press]').forEach(b => b.addEventListener('click', press));
    });
})();