describe("Payment Tests", () => {
  let billAmtInput = document.getElementById("billAmt");
  let tipAmtInput = document.getElementById("tipAmt");

  it("should test createCurPayment function", () => {
    billAmtInput.value = "100";
    tipAmtInput.value = "10";

    const payment = createCurPayment();

    expect(payment).toEqual({
      billAmt: "100",
      tipAmt: "10",
      tipPercent: calculateTipPercent("100", "10"),
    });
  });

  it("should return undefined if billAmt or tipAmt is empty", () => {
    billAmtInput.value = "";
    tipAmtInput.value = "10";

    let payment = createCurPayment();

    expect(payment).toBeUndefined();

    billAmtInput.value = "100";
    tipAmtInput.value = "";

    payment = createCurPayment();

    expect(payment).toBeUndefined();
  });
});
