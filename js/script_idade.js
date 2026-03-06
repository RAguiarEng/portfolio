(function () {
    const BIRTH = new Date(1984, 11, 2); // mês começa em 0 → 11 = dezembro

    function calcAge() {
        const now = new Date();
        const thisYear = now.getFullYear();

        // Último aniversário
        let lastBirthday = new Date(thisYear, BIRTH.getMonth(), BIRTH.getDate());
        if (lastBirthday > now) {
            lastBirthday = new Date(thisYear - 1, BIRTH.getMonth(), BIRTH.getDate());
        }

        // Próximo aniversário
        const nextBirthday = new Date(
            lastBirthday.getFullYear() + 1,
            BIRTH.getMonth(),
            BIRTH.getDate()
        );

        // Idade inteira atual
        let age = thisYear - BIRTH.getFullYear();
        if (now < new Date(thisYear, BIRTH.getMonth(), BIRTH.getDate())) {
            age -= 1;
        }

        // Progresso dentro do ano de vida atual (0 a 1)
        const elapsed = now - lastBirthday;
        const total = nextBirthday - lastBirthday;
        const progress = elapsed / total;

        return { age, progress };
    }

    function render() {
        const { age, progress } = calcAge();

        document.getElementById('age-current').textContent = age;
        document.getElementById('age-next').textContent = age + 1;
        document.getElementById('age-fill').style.width = (progress * 100).toFixed(2) + '%';
    }

    render();
})();