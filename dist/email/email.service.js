"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
const googleapis_1 = require("googleapis");
let EmailService = (EmailService_1 = class EmailService {
  constructor(configService) {
    this.configService = configService;
    this.logger = new common_1.Logger(EmailService_1.name);
  }
  async createTransporter() {
    const clientId = this.configService.get("CLIENT_ID");
    const clientSecret = this.configService.get("CLIENT_SECRET");
    const refreshToken = this.configService.get("REFRESH_TOKEN");
    const redirectUri = this.configService.get("REDIRECT_URI");
    if (!clientId || !clientSecret || !refreshToken || !redirectUri) {
      throw new Error("Missing environment variables for OAuth2 setup");
    }
    const oauth2Client = new googleapis_1.google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectUri,
    );
    oauth2Client.setCredentials({ refresh_token: refreshToken });
    try {
      const { token: accessToken } = await oauth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "comms@zumeraproperty.com",
          clientId,
          clientSecret,
          refreshToken,
          accessToken,
        },
      });
      return transporter;
    } catch (error) {
      this.logger.error("Error creating transporter:", error);
      throw new Error("Failed to create email transporter");
    }
  }
  async sendSubscriberEmail(name, email) {
    const mailOptions = {
      from: "Zumera Property <enquiry@zumeraproperty.com>",
      to: email,
      subject: "YOU'RE IN!",
      text: `
Dear ${name},

Welcome to Zumera! We're more than just a real estate company; we're a movement for achievers and aspiring leaders in a nation on the rise.

Zumera isn't just about luxury living; it's about inspiring you to BE BETTER. 

We build innovative structures that elevate your lifestyle and fuel your ambitions. Whether you've already made your mark or are hungry to make one, Zumera empowers you to live at your peak.

As a valued subscriber, you'll gain insights from industry leaders through expert guidance, find articles, events, and content to ignite your potential with inspiring resources, and connect with like-minded individuals to share your journey within a vibrant community. Plus, be the first to know about upcoming projects, exclusive offers, and pre-launch events with early access.

Follow us on all our social media for a peek into the Zumera lifestyle and stay tuned for exciting updates!

Zumera Property Development Limited.
      `,
    };
    try {
      const transporter = await this.createTransporter();
      await transporter.sendMail(mailOptions);
      this.logger.log(`Subscriber Email sent successfully to ${email}`);
    } catch (error) {
      this.logger.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  }
  async sendInvestorEmail(name, email) {
    const mailOptions = {
      from: "Zumera Property <enquiry@zumeraproperty.com>",
      to: email,
      subject: "KNOW MORE ABOUT US",
      html: `
        <p style="font-weight:bold">Congratulations, ${name}! You've taken a huge leap.</p>
        <div>
          <p>Zumera isn't just real estate – it's a movement for those who DARE TO BE BIGGER.</p>
          <p>The brochure you're about to download is a glimpse into our limitless world.</p>
          <p>Are you an achiever? Get subscribed to our newsletter to become a part of the Zumera community.</p>
          <p><a href="https://zumeratower.com/assets/files/investors_guide.pdf">Click here to download brochure</a></p>
        </div>
        <p><span style="margin-top:100px">Zumera Property Development Limited.</span></p>
      `,
    };
    try {
      const transporter = await this.createTransporter();
      await transporter.sendMail(mailOptions);
      this.logger.log(`Investor email sent successfully to ${email}`);
    } catch (error) {
      this.logger.error("Error sending investor email:", error);
      throw new Error("Failed to send investor email");
    }
  }
});
exports.EmailService = EmailService;
exports.EmailService =
  EmailService =
  EmailService_1 =
    __decorate(
      [
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [config_1.ConfigService]),
      ],
      EmailService,
    );
//# sourceMappingURL=email.service.js.map
