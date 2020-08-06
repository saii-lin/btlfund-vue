<template>
  <v-card flat>
    <v-card-text>
      <div id="show_overflow" class="panel panel-default dis_content">
        <div class="panel-heading1">
          <span name="text_switch">Disclaimer:</span>
          <span name="text_switch">Hong Kong - Professional Investor</span>
        </div>
        <div class="panel-body" style="line-height:22px;">
          <div class="alert alert-warning" role="alert">
            <p>
              <span name="text_switch">
                Professional Investors must read this page before proceeding.
                The following explains certain regulatory restrictions in
                certain jurisdictions on the distribution of the information
                provided on this website. After you have read the information
                set out below, please click on the button adjacent to the
                sentence,
              </span>
              <span name="text_switch">「I have read and agree to the above information」</span>
              <span name="text_switch">
                to acknowledge that you have read and understood the information
                and accept the terms and conditions set out therein, otherwise
                click
              </span>
              <span name="text_switch">「Cancel」</span>
              <span name="text_switch">to leave the website.</span>
            </p>
            <p>
              <b>
                <span name="text_switch">
                  The information of the website you are about to access is
                  intended for the Professional Investors / Accredited &amp;
                  Institutional Investors / Qualified Investors ONLY as
                  appropriately defined in your relevant
                  jurisdiction.&nbsp;
                </span>
              </b>
            </p>
          </div>
          <h4 style="width:100%;border-bottom:1px solid ;">
            <span name="text_switch">Does not constitute an offer / local restriction</span>
          </h4>
          <p>
            <span name="text_switch">
              Nothing contained in or on the website should be construed as a
              solicitation of an offer to buy or offer, or recommendation to
              acquire or dispose of any security, commodity, investment or to
              engage in any other transaction. No information included on this
              website should be construed as an investment advice, a
              recommendation or a representation about the suitability or
              appropriateness of any advisory product or service; or an offer to
              buy or sell, or the solicitation of an offer to buy or sell any
              security, financial product, or instrument; or to participate in
              any particular trading strategy. Investors should seek an
              independent financial and tax advice before making their
              investment decision.
            </span>
          </p>
          <p>
            <span name="text_switch">
              The information provided on the website is not intended for
              distribution to, or use by, any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to the pertaining law or regulation. All persons and
              entities accessing the website do so on their own initiative and
              are responsible for compliance with applicable local laws and
              regulations. The website is not directed to any person in any
              jurisdiction where the publication or availability of the website
              is prohibited, by reason of that person’s nationality, residence
              or otherwise. Persons under these restrictions must not access the
              website. For investors outside Hong Kong, please also contact your
              local intermediaries for further information and advice.
            </span>
          </p>
          <h4 style="height:30px;width:100%;border-bottom:1px solid ;">
            <span name="text_switch">Website published</span>
          </h4>
          <p>
            <span name="text_switch">
              BTLAM has taken reasonable care to ensure that the information
              contained on this website is accurate, current, complete, and fit
              for its intended purpose and compliant with relevant laws and
              regulations and, where applicable, the laws of the country of your
              residence as at the date of issue. However, errors or omissions
              may occur due to circumstances beyond BTLAM’s control and no
              warranty is given, or representation made, regarding the accuracy,
              validity or completeness of the information on this website and no
              liability whatsoever is to be assumed by BTLAM for the accuracy or
              completeness of such information. You must conduct your own due
              diligence and investigations rather than relying on any of the
              information in this website. Any person who acts upon the
              information contained on this website does so entirely at his own
              decision, hence at his own risk.
            </span>
          </p>
          <p>
            <span name="text_switch">
              Information posted on this website is intended to be current as
              at the date it is first posted and may no longer be true or
              complete when viewed by you. BTLAM cannot guarantee that the
              content will be accurate, complete and current at all times. To
              the extent that any information on this website relates to a third
              party, such information has been provided by that third party and
              is the sole responsibility of such third party and BTLAM accepts
              no liability for such information. All content on the website is
              subject to modification from time to time without notice to the
              viewers.
            </span>
          </p>
          <p>
            <span name="text_switch">
              To the extent that this website contains any expression of
              opinion or forecast, such opinion or forecast is based on sources
              believed by BTLAM to be reliable, but is not guaranteed or
              warranted as to its current validity, accuracy or completeness.
              Opinions expressed represent the opinions of BTLAM at the date of
              publication only, reflecting prevailing market conditions and
              certain assumptions (which may not prove to be valid), which are
              subject to change and should not be relied on by users of the
              website.
            </span>
          </p>
          <h4 style="height:30px;width:100%;border-bottom:1px solid ;">
            <span name="text_switch">Risk warning</span>
          </h4>
          <p>
            <b>
              <span name="text_switch">
                Investment involves risks. Past performance does not
                necessarily a guide to future performance. The value of
                investments and the expected income from them may go up or down
                and that your original investment may incur an undesirable loss.
                Please refer to the offering documents for details, including
                the risk factors. You should ensure that you fully understand
                the risks associated with the investment and should also
                consider your own investment objective and risk tolerance level.
                If in doubt, please seek your independent professional advice
                for your investment and financial arrangement.
              </span>
            </b>
          </p>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <form action role="form">
        <button type="button" class="btn btn-success sureRead" @click="$emit('agree')">
          <span name="text_switch">AGREE</span>
        </button>
        <button type="button" class="btn btn-danger cancle" @click="$emit('cancel')">
          <span name="text_switch">CANCEL</span>
        </button>
      </form>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
h4{
  height:30px;
}
.v-card__text {
  background: #eee;
}
/* p {
  text-align: justify;
} */
.alert-warning {
  margin: 0 !important;
  padding: 0 !important;
}
@media screen and (max-width: 500px) {
h4{
  height:50px;
}
}

</style>
