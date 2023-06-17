import { useLocalStorage } from "../useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  })

  const { getLocalStorage, setLocalStorage, STORAGE_KEY } = useLocalStorage();

  it("should return item from localStorage", () => {
    window.localStorage.setItem(`${STORAGE_KEY}key`, JSON.stringify("John"));

    expect(getLocalStorage("key")).toStrictEqual("John");
  });

  it("should add item at localStorage", () => {
    setLocalStorage("key", "Doe")

    const data = window.localStorage.getItem(`${STORAGE_KEY}key`)

    expect(data).toStrictEqual(JSON.stringify("Doe"));
  })
});
