document.getElementById('openModal1').onclick = function() {
    document.getElementById('modal1').style.display = 'block';
};

document.getElementById('closeModal1').onclick = function() {
    document.getElementById('modal1').style.display = 'none';
};

document.getElementById('openModal2').onclick = function() {
    document.getElementById('modal2').style.display = 'block';
};

document.getElementById('closeModal2').onclick = function() {
    document.getElementById('modal2').style.display = 'none';
};

document.getElementById('openModal3').onclick = function() {
    document.getElementById('modal3').style.display = 'block';
};

document.getElementById('closeModal3').onclick = function() {
    document.getElementById('modal3').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('modal1')) {
        document.getElementById('modal1').style.display = 'none';
    }
    if (event.target == document.getElementById('modal2')) {
        document.getElementById('modal2').style.display = 'none';
    }
    if (event.target == document.getElementById('modal3')) {
        document.getElementById('modal3').style.display = 'none';
    }
};
