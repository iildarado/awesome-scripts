
let toastBox = document.getElementById('toastBox');

const successMsg = '<p>Successfully!</p>';
const errorMsg = '<p>Fatal error, try again later.</p>';
const invalidMsg = '<p>Invalid input, check again.</p>';

function showToast(statusMsg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = statusMsg;
    toastBox.appendChild(toast);

    if (statusMsg.toLowerCase().includes('error')) {
        toast.classList.add('error');
    } else if (statusMsg.toLowerCase().includes('success')) {
        toast.classList.add('success');
    } else if (statusMsg.toLowerCase().includes('invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove()
    }, 5000);
}