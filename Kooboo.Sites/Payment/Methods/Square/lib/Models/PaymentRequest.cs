﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Kooboo.Sites.Payment.Methods.Square.lib.Models
{
    public class PaymentRequest
    {
        /// <summary>
        /// The ID for the source of funds for this payment.  This can be a nonce
        /// generated by the Payment Form or a card on file made with the Customers API.
        /// </summary>
        [JsonProperty("source_id")]
        public string SourceId { get; set; }

        /// <summary>
        /// A unique string that identifies this CreatePayment request. Keys can be any valid string but
        /// must be unique for every CreatePayment request. 
        /// Max: 45 characters
        /// See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
        /// </summary>
        [JsonProperty("idempotency_key")]
        public string IdempotencyKey { get; set; }

        /// <summary>
        /// Represents an amount of money. `Money` fields can be signed or unsigned.
        /// Fields that do not explicitly define whether they are signed or unsigned are
        /// considered unsigned and can only hold positive amounts. For signed fields, the
        /// sign of the value indicates the purpose of the money transfer. See
        /// [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
        /// for more information.
        /// </summary>
        [JsonProperty("amount_money")]
        public Models.Money AmountMoney { get; set; }

        /// <summary>
        /// An optional note to be entered by the developer when creating a payment
        /// Limit 500 characters.
        /// </summary>
        [JsonProperty("note")]
        public string Note { get; set; }
    }
}