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
  }

  const formattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return day + "/" + month + "/" + year;
  };

  return {
    capitalizeName,
    formatCep,
    formattedDate
  }
}
3
