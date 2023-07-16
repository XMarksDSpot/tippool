describe('Helpers Test', () => {

    beforeEach(() => {
      allPayments = {
        payment1: { billAmt: '100', tipAmt: '20' },
        payment2: { billAmt: '50', tipAmt: '10' }
      };
    });
  
    it('should calculate the sum of payment total correctly', () => {
      const totalBill = sumPaymentTotal('billAmt');
      expect(totalBill).toEqual(150);
  
      const totalTip = sumPaymentTotal('tipAmt');
      expect(totalTip).toEqual(30);
    });
  
    it('should calculate tip percent correctly', () => {
      const tipPercent = calculateTipPercent('100', '20');
      expect(tipPercent).toEqual(20);
    });
  
    it('should append a td element with the correct value', () => {
      let tr = document.createElement('tr');
      appendTd(tr, 'test');
  
      expect(tr.children.length).toBe(1);
      expect(tr.children[0].innerText).toBe('test');
    });
  });

describe('Delete Button Test', function() {
    it('should append a delete button to a tr', function() {
        let tr = document.createElement('tr');
        appendDeletedBtn(tr);

expect(tr.children.length).toBe(1);

expect(tr.children[0].innerText).toBe('X');
    });
  });