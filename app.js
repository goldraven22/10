 const form = document.getElementById('driverForm');
const confirmation = document.getElementById('confirmation');

// Main form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    cdlClass: form.cdlClass.value,
    endorsements: Array.from(form.querySelectorAll('input[name="endorsement"]:checked')).map(i => i.value),
    driverType: form.driverType.value,
    fleetSize: form.fleetSize.value,
    experience: form.experience.value,
    equipment: form.equipment.value,
    eld: form.eld.value,
    route: form.route.value,
    homeCity: form.homeCity.value,
    homeState: form.homeState.value,
    willingness: Array.from(form.querySelectorAll('input[name="willingness"]:checked')).map(i => i.value),
    loadPreferences: form.loadPreferences.value,
    payStructure: form.payStructure.value,
    insurance: form.insurance.value,
    interests: Array.from(form.querySelectorAll('input[name="interest"]:checked')).map(i => i.value),
    consent: form.consent.checked,
    submitted_at: new Date().toISOString(),
    type: 'profile'
  };

  try {
    const response = await fetch('YOUR_SUPABASE_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'YOUR_SUPABASE_KEY'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      form.style.display = 'none';
      confirmation.style.display = 'block';
    } else {
      alert('Error submitting form. Please try again.');
    }
  } catch (err) {
    console.error(err);
    alert('Error submitting form. Please try again.');
  }
});

// Referral button
document.getElementById('referBtn').addEventListener('click', async () => {
  const referralEmail = prompt('Enter the email of the driver you are referring:');
  if (!referralEmail) return alert('Referral cancelled');

  const referralData = {
    referred_email: referralEmail,
    referrer_name: form.name.value || 'Unknown',
    submitted_at: new Date().toISOString(),
    type: 'referral'
  };

  try {
    const response = await fetch('YOUR_SUPABASE_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'YOUR_SUPABASE_KEY'
      },
      body: JSON.stringify(referralData)
    });

    if (response.ok) {
      alert('Referral submitted successfully!');
    } else {
      alert('Error submitting referral. Try again.');
    }
  } catch (err) {
    console.error(err);
    alert('Error submitting referral. Try again.');
  }
});

// CDL info button
document.getElementById('infoBtn').addEventListener('click', async () => {
  const infoEmail = prompt('Enter your email to receive CDL training info:');
  if (!infoEmail) return alert('Cancelled');

  const infoData = {
    email: infoEmail,
    interest: 'CDL Training',
    submitted_at: new Date().toISOString(),
    type: 'lead'
  };

  try {
    const response = await fetch('YOUR_SUPABASE_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'YOUR_SUPABASE_KEY'
      },
      body: JSON.stringify(infoData)
    });

    if (response.ok) {
      alert('Thanks! CDL training info will be sent to your email.');
    } else {
      alert('Error submitting request. Try again.');
    }
  } catch (err) {
    console.error(err);
    alert('Error submitting request. Try again.');
  }
});