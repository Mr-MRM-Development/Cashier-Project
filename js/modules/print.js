/**
 * -------------------------------------------------------------
 * 
 *               (C) 2026 Team 1 Cashier Application
 *                       By: M. Rakka Falleh
 * 
 * -------------------------------------------------------------
 */

function formatRupiah(number) {
    return "Rp " + Number(number).toLocaleString("id-ID");
}

function printReceipt(data) {
    const receiptContainer  = document.createElement("div");
    receiptContainer.id     = "receipt";
    
    receiptContainer.style.transform = "translate(-50%, -50%)";
    receiptContainer.style.position  = "fixed";
    receiptContainer.style.left      = "50%";
    receiptContainer.style.top       = "-200%";
        

    // document.body.appendChild(pages);

    let itemsHTML = "";

    data.items.map((item) => {

        itemsHTML += `
            <div class="receipt-item">

                <div class="receipt-item-name">
                    ${item.name}
                </div>

                <div class="receipt-item-row">
                    <span>
                        ${item.total} x ${formatRupiah(item.price)}
                    </span>

                    <span>
                        ${formatRupiah(item.totalPrice)}
                    </span>
                </div>

            </div>
        `;
    }).join();

    const mainCode = `
    <html>
    <head>
        <style>

            .receipt-paper {
                width: 58mm;
                background: white;
                padding: 4mm;
                font-family: monospace;
                color: black;
                position: fixed;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 50%;
            }

            .receipt-title {
                text-align: center;
                font-size: 18px;
                font-weight: bold;
            }

            .receipt-address {
                text-align: center;
                font-size: 12px;
                margin-bottom: 10px;
            }

            .receipt-item {
                margin-bottom: 8px;
            }

            .receipt-item-name {
                font-weight: bold;
                font-size: 13px;
            }

            .receipt-item-row,
            .receipt-row {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }

            .receipt-summary {
                margin-top: 10px;
            }

            .receipt-footer {
                text-align: center;
                margin-top: 10px;
                font-size: 12px;
            }

            hr {
                border: none;
                border-top: 1px dashed black;
                margin: 8px 0;
            }

            @page {
                size: 58mm auto;
                margin: 0;
            }

            @media print {

                body * {
                    visibility: hidden;
                }

                #receipt,
                #receipt * {
                    visibility: visible;
                }

                #receipt {
                    position: absolute;
                    left: 0;
                    top: 0;
                }

            }

        </style>
    </head>
    <body>
        <div class="receipt-paper">

            <div class="receipt-title">
                TOKO ADA AJA
            </div>

            <div class="receipt-address">
                Jl. Cashier No. 58
            </div>

            <hr>

            ${itemsHTML}

            <hr>

            <div class="receipt-summary">

                <div class="receipt-row">
                    <span>Total Item</span>
                    <span>${data.totalItems}</span>
                </div>

                <div class="receipt-row">
                    <span>Total</span>
                    <span>${formatRupiah(data.price)}</span>
                </div>

                <div class="receipt-row">
                    <span>Bayar</span>
                    <span>${formatRupiah(data.nominal)}</span>
                </div>

                <div class="receipt-row">
                    <span>Kembalian</span>
                    <span>${formatRupiah(data.exchange)}</span>
                </div>

            </div>

            <hr>

            <div class="receipt-footer">
                Terima kasih
            </div>

        </div>
        <script>
            
        </script>
    </body>
    </html>

    `;

    receiptContainer.innerHTML = mainCode;

    const printPage = window.open("", "_blank");
    printPage.document.write(mainCode);
    printPage.document.close();
    printPage.onload = () => {
        printPage.print();
    };
}

export { printReceipt };