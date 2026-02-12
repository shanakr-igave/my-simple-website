function showErrorToast(message) {
  const toast = document.getElementById("error-toast");
  toast.innerText = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

function trigger400Error() {
  showErrorToast("400 Error occurred!");

  setTimeout(() => {
    // Intentional UI error
    const user = null;
    console.log(user.name); // This will crash
  }, 200);
}

function trigger500Error() {
  showErrorToast("500 Error occurred!");

  setTimeout(() => {
    notExistingFunction(); // Another real UI crash
  }, 200);
}
