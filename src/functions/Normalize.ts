export function Normalize() {
  const capitalizeName = (str: string) => {
    return str
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatCep = (value: string): string => {
    const formattedValue = value.replace(/\D/g, "");
    const cepRegex = /^(\d{5})(\d{3})$/;

    if (cepRegex.test(formattedValue)) {
      return formattedValue.replace(cepRegex, "$1-$2");
    }

    return formattedValue;
  };

  function stringToDate(dataStr: string, isTime?: boolean): string | null {
    try {
      const [datePartOne, datePartTwo] = dataStr.split("T");
      const [dateYear, dateMonth, dateDay] = datePartOne.split("-");
      const [hourHour, minHour, secHour] = datePartTwo.split(":");

      const data = new Date(
        Number(dateYear),
        Number(dateMonth) - 1,
        Number(dateDay),
        Number(hourHour),
        Number(minHour),
        Number(secHour)
      );

      if (isNaN(data.getTime())) {
        throw new Error("Data inválida");
      }

      const day = data.getDate().toString().padStart(2, "0");
      const month = (data.getMonth() + 1).toString().padStart(2, "0");
      const year = data.getFullYear();
      const hour = data.getHours().toString().padStart(2, "0");
      const minutes = data.getMinutes().toString().padStart(2, "0");

      const showTime = isTime ? `às ${hour}:${minutes}` : '';

      return `${day}/${month}/${year} ${showTime}`;
    } catch (error) {
      console.error("Erro ao converter a data:", error);
      return null;
    }
  }

  return {
    capitalizeName,
    formatCep,
    stringToDate,
  };
}
