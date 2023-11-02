document.getElementById('submit').addEventListener('click', function() {
    const name = document.getElementById('name').nodeValue;
    const email = document.getElementById('email').nodeValue;
    const mobile = document.getElementById('mobil').nodeValue;

    const isNameValid = validateName(name);
  const isEmailValid = validateEmail(email);
  const isMobileValid = validateMobile(mobile);
  
    if (!validateName(name)|| !validateEmail(email) || !validateMobile(mobile)){
      document.getElementById('error').style.display = 'block';
      return;
    }
  
    document.getElementById('error').style.display = 'none';
    document.getElementById('contactForm').reset();
  
    const table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = mobile;
  });
  
  