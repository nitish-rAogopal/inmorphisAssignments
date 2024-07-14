// Write a JavaScript function to hide email addresses to protect from
// unauthorized user.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(email) {
    const [local, domain] = email.split('@');
    const hiddenLocal = local.slice(0, 2) + '...';
    return `${hiddenLocal}@${domain}`;
}
console.log(protect_email("robin_singh@example.com"));