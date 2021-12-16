let accountInfo = {};
function FirstNameChanged (firstname) {
  accountInfo.Firstname = firstname.value;
  ValidateForm();   
}

function LastNameChanged (lastname) {
  accountInfo.Lastname = lastname.value;
  ValidateForm();
}

function EmailChanged (email) {
  accountInfo.Email = email.value;
  ValidateForm();
}

function PasswordChanged (pass) {
  accountInfo.Password = pass.value;
  ValidateForm();
}

function PasswordConfirmChanged (pass1) {
  accountInfo.PasswordConfirm = pass1.value;
  ValidateForm();
}

function StreetAddressChanged (address) {
  accountInfo.StreetAdress = address.value;
  ValidateForm();
}

function CountryCodeChanged (code) {
  if (!code.value) {
    return;
  }

  let countrySelect = document.getElementsByName('country')[0];
  switch (code.value) {
    case 'ua': 
      countrySelect.value = 'ukraine';
      break;
    
    case 'eg': 
      countrySelect.value = 'egipt';
      break;

    case 'sw': 
      countrySelect.value = 'sweden';
      break;
  }

  CountryChanged(countrySelect);

  accountInfo.CountryCode = code.value;
  ValidateForm();
}


function CountryChanged (countrySelect) {
  if (!countrySelect.value) {
    return;
  }

  let selectCity = document.getElementsByName('city')[0];
  let cityArray = [];

  switch (countrySelect.value) {
    case 'ukraine': 
      cityArray = ['Kyiv', 'Kaniv', 'Dnipro', 'Kharkiv', 'Odessa'];
      break;
    
    case 'egipt': 
      cityArray = ['Cairo', 'Alexandria', 'Giza', 'Luxor', 'Suez'];
      break;

    case 'sweden': 
      cityArray = ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Westeros'];
      break;  
  }

  let options = '';

  for (let city of cityArray) {
    options += `<option value='${city}'>${city}</option>`;           
  }

  selectCity.innerHTML = options;

  accountInfo.Country = countrySelect.value;
  CityCodeChanged(selectCity);

}  

function UserTelephone (tel) {
  accountInfo.UserTelephone = tel.value;
  ValidateForm();
}

function CityCodeChanged (city) {
  accountInfo.City = city.value;
  ValidateForm();
}

function PostalCodeChanged (postcode) {
  accountInfo.PostalCode = postcode.value;
  ValidateForm();
}

function ValidateForm () {
  let submitBtn = document.getElementById('submit');
  submitBtn.disabled = true;

  if (!accountInfo.Firstname || !accountInfo.Lastname || !accountInfo.Email
    || !accountInfo.StreetAdress || !accountInfo.Country || !accountInfo.CountryCode
    || !accountInfo.UserTelephone || !accountInfo.City || !accountInfo.PostalCode) {
    return false;    
  }

  if (accountInfo.Password !== accountInfo.PasswordConfirm) {
    return false;
  }

  submitBtn.disabled = false;
  return true;
}

function Submit () {
  let form = document.getElementsByClassName('form')[0];
  let accInfo = document.getElementById('accInfo');
  let userName = document.getElementById('userName');
  let userEmail = document.getElementById('userEmail');
  let UserChecked = document.getElementById('UserChecked');
  let userSubscribed = document.getElementById('userSubscribed');
  let street = document.getElementById('street');
  let country = document.getElementById('country');

  userName.innerHTML = accountInfo.Firstname + ' ' + accountInfo.Lastname;
  userEmail.innerHTML = accountInfo.Email;
  form.hidden = true;
  accInfo.hidden = false;

    if (UserChecked.checked) {
      userSubscribed.innerHTML = 'You are subscribed to our newsletter';
    } else {
      userSubscribed.innerHTML = 'You aren\'t subscribed yo our newsletter';
    }

    street.innerHTML = accountInfo.StreetAdress;
    country.innerHTML = accountInfo.Country;
}
