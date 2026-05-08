const template =
`<div id = 'receipt-content' style = 'width: 80mm; font-family: 'Courier New', 'Courier', 'monospace'>"
    <h2 style = "text-align: center;>Toko Ada Aja</h2>"
        <p style = "text-align: center;">Jl. SayaAkanLawan<br>Tel: 0082-9212</p>
            <hr>
                <table style = "width: 100%">
                <thead>
                    <tr>
                        <th style="text-align: left;">Item</th>
                        <th style="text-align: right;">Qty</th>
                        <th style="text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item1</td>
                        <td style = "text-align: right">Qty</td>
                        <td style = "text-align: right">Total</td>
                    </tr>
                </tbody>
                </table>
                <h3 style= "text-align: right;">Total: harga</h3>
                <p style="text-align:center;">Terima Kasih Telah Berbelanja Dengan Kami!!1</p>
        </div>
        
        <button type="button" onclick="printReceipt()">Print Struk</button>`;
function printReceipt(){
    printJS({
        printable: 'receipt-content',
        type: 'html',
        targetStyle:['*'],
        style:'@page {size: auto; margin: 0mm;}',
        scanStyle: true
    });
}

export{printReceipt}