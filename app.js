const form = document.getElementById('driverForm');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Collect form data
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
    payStructure: form.payStructure.value,
    insurance: form.insurance.value,
    interests: Array.from(form.querySelectorAll('input[name="interest"]:checked')).map(i => i.value),
    consent: form.consent.checked,
    submitted_at: new Date().toISOString()
  };

  try {
    // Replace with your own Supabase / Firebase endpoint
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

// Sandbox buttons
document.getElementById('referBtn').addEventListener('click', () => {
  alert('Referral feature coming soon!');
});

document.getElementById('infoBtn').addEventListener('click', () => {
  alert('CDL info feature coming soon!');
});