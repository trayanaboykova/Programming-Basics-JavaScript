function hospital(input) {
    let days = parseInt(input[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= days; i++) {
        let patientsToday = parseInt(input[i]);

        if (i % 3 === 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++;
            }
        }

        if (patientsToday <= doctors) {
            treatedPatients += patientsToday;
        } else {
            treatedPatients += doctors;
            untreatedPatients += patientsToday - doctors;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}