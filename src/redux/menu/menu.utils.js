export const toggleMobileMenu = (mobileMenuHidden) => {
    const mobileMenu = document.getElementById('mobile-menu');
    function setAnimation() {
        mobileMenu.classList.toggle('active');
    };
    setTimeout(setAnimation, 100);
    return !mobileMenuHidden;
}