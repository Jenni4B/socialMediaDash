
// The first parameter is the login form,
// the second parameter is a function that's executed upon successful login.
// function logIn(form/elementParameter, functionParameter) 

function logIn(form, onSuccess) {

    const emailInput = form.elements.namedItem('email');
    const passwordInput = form.elements.namedItem('password');
    const email = emailInput?.value.trim() ?? '';
    const password = passwordInput?.value.trim() ?? '';

    if (!email || !password) {
        console.log("Email and password are required");
        return;
    }

    console.log("Login form submitted");
    
    const timer = setTimeout(() => {
        console.log("User logged in successfully");
        if (onSuccess) onSuccess();
    }, 2000);

    return () => clearTimeout(timer);
}

export default logIn;