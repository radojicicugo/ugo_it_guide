import React from 'react';
import prva from '../img/prva.png'
import spam from '../img/spam-filters.png'
import gweb from '../img/giphy.webp'
import image from '../img/image.png'
import lastt from '../img/lastt.jpeg'



function HowToLandEmailsInbox(props) {
     return (
     
          <div className='land-box m-3 p-3'>
               <h1 className='p-3 m-3'>How To Land Your Emails In Inbox? The Ultimate Guide!</h1>
          <div className='bodyOne m-3 p-3'>
                         <div className="p-3 m-0">
                              <img className="first" src={prva} alt="tu sam"></img>
                         </div> 
                    <h3 className='maliN p-3 m-3'>If your recipients never see your emails in their inboxes, then the effort and time you consumed to create and run your email marketing campaigns were simply wasted.</h3>
          </div>
               <h5 className='p-3 m-3'>following definition of email deliverability:</h5>
          <div className='body2 m-3 p-3'>
                    The measurement and understanding of how successful a sender is at getting their marketing message into people’s inboxes.
          </div>
               <h4 className='p-3 m-3'>Fortunately, you are here! in this Guide, I will Explain and Show You everything you have to know to make sure your emails land in the inbox and not spam.</h4>
          <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>Spam Filters 101</h2>
                    When you send an email to someone, let's say to a Gmail account, what's happening in the background is that you are contacting or communicating with the Gmail Mail System. and Gmail like any Email Service Provider has what we call “SPAM Filters” which are a layer of security to protect their users from fraud & spam messages. check the diagram below:
          </div>
          <div className='bodyOne m-3 p-3'>
                    <div className="p-3 m-0">
                         <img className="first" src={spam} alt="tu sam"></img>
                    </div>
                    SO as you can see, whenever you send a message to a target mailbox, the mail server will filter the message using the spam filters and determines whether it's a spam message or not.
          </div>
               <h3 className='p-3 m-3'>How Spam Filters Work?</h3>
          <div className='bodyOne m-3 p-3'>
                    To send your emails directly to the inbox, simply you need to pass spam filters! And to pass spam filters, we need to understand how it works.
          </div>
          <div className='bodyOne m-3 p-3'>
                    Years Ago, The Spam Filters was configured to follow certain rules in order to filters emails. Like Image ration in your emails, blacklisted domains, spam keywords, Sender Reputation, Volume…
          </div>
          <div className='bodyOne m-3 p-3'>
                    I'm not saying that those are not factors anymore, NO. But the technology changed, the way the spam filters work changed.
          </div>
          <div className='bodyOne m-3 p-3'>
                    Today Spam Filters are Intelligent. it can learn with the new machine learning technology!
          </div>
          <div className='bodyOne m-3 p-3'>
                    So Spam Filters are able to analyze Billions of emails and learn from user activity and patterns on how to filter spam emails!
          </div>
               <h3 className='body2 p-3 m-3'>Why this matter?</h3>
          <div className='bodyOne m-3 p-3'>
                    Maybe you are wondering… Ok what changed now, what should I know?

                    Let's see some examples:

                    Before, in the old days! if you send a low volume of emails, you will be ok and your emails will pass the filters.

                    But Today, these smart filters will detect spam even if you send 10 Emails per day!

                    Even if you send an inconsistent number of emails like suddenly you send 100 Emails a day whereas you were sending like 10-20 emails daily. this is also may flag you as spam. and here why it's important to be consistent when sending emails. (we will talk about this later in more details).

                    Another example is your domain, today, if you get a new domain, it may be blacklisted automatically for 30 days as a precaution. and using an old domain is better for your reputation.
          </div>
               <h3 className='p-3 m-3'>So yes, it matters! and you need to learn the rules of the new game!</h3>
          <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>Let's Inbox!</h2>
                    Ok Friends, Now let's dive in and cover almost everything you need to know in order to avoid spam and land your emails in the inbox
          </div>
               <h2 className='p-3 m-3'>1. Subject Line & Message Body</h2>
               <h4 className='p-3 m-3'>Subject Line</h4>
          <div className='bodyOne m-3 p-3'>
                    When you send an email, the main two parts that form your message are the Subject line and the Message Body. So Simply you need to ensure that both will not trigger the spam filter. How?

                    Just Make sure to avoid any bad or spammy keywords in your Subject Line and in your message content. to do so you can simply do the following:

                    When you write the subject line, test it using subject line testers and ensure its a good subject line. So use a service like SendCheckit Subject Line Tester which is a free online tool and make sure you get a good score.
          </div>
               <h5 className='body2 p-3 m-3'>Example of a Bad Subject Line: “GET FREE [100$] GIFT – CLICK HERE!”</h5>
          <div className='bodyOne m-3 p-3'>
                    Results from sendcheckit
          </div>
          <div className='bodyOne m-3 p-3'>
                    This Subject Line is bad Simply because it contains some Bad & Spammy keywords like “Get”, “Free”, “here”
          </div>
          <div className='bodyOne m-3 p-3'>
                    Also, it contains bad characters like the exclamation mark “!” and the All caps letters.
          </div>
          <div className='bodyOne m-3 p-3'>
                    Example of a Good Subject Line: “Email Marketer? Want to Boost Conversions????”
          </div>
               <strong>Simple, Clean, and Perfect Subject Line to use.</strong>
          <div className='bodyOne m-3 p-3'>
                    <h3 className='p-3 m-3'>Message body</h3>
                    Like Subject Lines, The Message Body also must not contain any spammy or bad keywords like the following:
                    <strong>Earn $, Get Rich, 100% Free, FREE ….and other keywords.</strong>
          </div>
          <div className='bodyOne m-3 p-3'>
                    Other than spammy keywords, there are some good practices to follow when you write your email:
                   <ol className='p-3 m-3'>
                         <li>Text to image ratio: Spam filters are suspicious of emails made up of mostly images.</li>
                         <li>Thoughtfully add links. You don't want to add links more than 3 times in one email. (we will talk about links more later)</li>
                         <li>Personalization. insert personalization into your emails (person name or company).</li>
                   </ol>
                    <p>Note About Personalization: Although it's a good practice to personalize your emails after I did a lot of tests and check-up different sources, It didn't seem to be big deal maybe except in Cold Email Marketing.</p>
          </div>
          <div className='bodyOne m-3 p-3'>
                    If you Go Neil Patel's website, Backlinko, or H-educate, you will see that to subscribe to the newsletter, you will need to enter only your email address. so emails are not personalized and email campaigns are performing greatly and delivery rates are up to 90%.
          </div>
          <div className='bodyOne m-3 p-3'>
                    Optimized Your Subject Line and Message Body? Great! ✔️
          </div>
               <h2 className='p-3 m-3'>2. Your Sending Domain</h2>
          <div className='bodyOne m-3 p-3'>
                    The Second important thing that you have to look into, is your Domain name. the domain that you are using to send emails.
          </div>
          <div className='bodyOne m-3 p-3'>
                    Before you send your email campaigns, you need to make sure your domain is clean and not blacklisted. How to check?
          </div>
          <div className='bodyOne m-3 p-3'>
                    Simply, you can go to MXtoolbox.com and use the blacklist tool which can show you in seconds the status of your domain, here is mine:
          </div>
          <div className='bodyOne m-3 p-3'>
                    <div className="p-3 m-0">
                         <img className="first" src={gweb} alt="tu sam"></img>
                    </div>
          </div>
               <h4>Note: if your domain is still new, it may be blacklisted automatically by SEM FRESH, It's normal, it will be removed automatically after 15-30 days.</h4>
          <div className='bodyOne m-3 p-3'>
                    Checked Your Domain? Great! ✔️
          </div>
          <div className='bodyOne m-3 p-3'>
                    Another Important Note to Know!
          </div>
          <div className='body2 m-3 p-3'>
                    If you are sending cold emails if you are a cold email marketer, it's better to use a domain other than your primary business domain. because if it got blacklisted, your main domain will stay safe.
          </div>
          <div className='bodyOne m-3 p-3'>
                    <strong>So Just Go and Get a domain dedicated to cold email marketing only.</strong>
          </div>
          <div className='bodyOne m-3 p-3'>
                    Gmail Postmaster Tools
          </div>
          <div className='bodyOne m-3 p-3'>
                    The Next Step is to add your Domain to Gmail Postmaster Tools to Monitor its reputation, Spam rate, Authentication, and other stuff which will help you understand your email sending level and detect any problems.
          </div>
               <h2 className='p-3 m-3'>3. URLs & Links</h2>
          <div className='bodyOne m-3 p-3'>
                    Spam Filters are very sensitive to the links that you add to your emails. Because it's where the user will take action.

                    So you need to take care very well when adding your links.

                    The First thing you have to check, is if the Domain URLs are <strong>blacklisted or not.</strong> and if it's safe or not.

                    Ok, about the blacklist, I mentioned that you can use Mxtoolbox to check.

                    What about safe links?

                    Simply you can use tools like <strong>Google Safe Browsing,</strong> <strong>Kaspersky VirusDesk,</strong> or Phishtank to test any URL.
          </div>
          <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>Test by Google Safe Browsing.</h2>
          </div>
          <div className='bodyOne m-3 p-3'>
                    So always check your links before adding it. This is one.

                    The second thing you have to take care of is the Affiliate & CPA Offer Links. Don't Ever Ever add <strong>Affiliate links</strong> directly into your emails!
          </div>
               <h3 className='p-3 m-3'>How to add Affiliate Links to our emails?</h3>
          <div className='bodyOne m-3 p-3'>
                    I said <strong>“Don't ever add</strong> to emails“, then how we are going to promote affiliate using email marketing?

                    if you work as an Affiliate & CPA marketing Like promoting ClickBank Offers, Amazon products, Maxbounty Offers, or whatever. Then one of the main channels is to promote using email marketing.

                    Of course, I am not talking about spamming here! You have a subscriber base, you know their interests, you can send them some special deals and promotions.

                    as an example, I am subscribed to 3 Affiliate networks. One is related to web hosting, one is about email marketing tools, and the third is the Udemy affiliate program.

                    There is nothing wrong to send my subscribers a notification that Udemy is running a sale if you would like to get a course, and I attach my Udemy affiliate link. this 100% legal, and this is how it works.

                    Anyway, let's go back to our topic, How to promote affiliate offers through email marketing?

                    Here we have 2 Approaches and I do prefer the second one because of its more professional.
          </div>
               <h4 className='p-3 m-3'>What are these two approaches?</h4>
          <div className='bodyOne m-3 p-3'>
<ol>
                         <li>Cloak Your URLs.</li>
                         <li>Use a Landing Page.</li>
</ol>
          </div>
               <h3 className='p-3 m-3'>Cloak Your URLs. (Masking Links)</h3>
          <div className='bodyOne m-3 p-3'>
                    URL Cloaking, or what we call Stealth Forwarding is a technique used to hide the target URL that you want to use to visit and mask it by another one that looks like a normal URL.
          </div>
               <h3 className='p-3 m-3'>How this works?</h3>
          <div className='bodyOne m-3 p-3'>
                    We use an HTML frame on our web page to hide the main URL. or we can use HTML redirection.

                    If you are not familiar with such terms, it's ok, anyway, It's so simple. You can watch the following video to learn more in detail how cloaking works and how to create your own Cloaker.
          </div>
          <div className='bodyOne m-3 p-3'>
                    <div className="p-3 m-0">
                         <img className="first" src={image} alt="tu sam"></img>
                    </div> 
          </div>
               <h3>Use a Landing Page.</h3>
          <div className='bodyOne m-3 p-3'>
                    The second option which I do prefer is to use a landing page or a normal post on your blog that is talking about the offer, then you can add your links inside the post.

                    So in your emails, you will be linking to your website landing page or blog post, and everything will look normal.

                    <strong>Now your URLs are safe. Great!</strong> ✔️
          </div>
               <h2 className='p-3 m-3'>4. Email Tracking</h2>
          <div className='bodyOne m-3 p-3'>
                    When you send an email marketing campaign using any email marketing service or with your system, you will have the ability to monitor and track your emails.

                    So we can know who opened the emails, and who clicked the emails, from which countries and so on.
          </div>
               <h3 className='p-3 m-3'>Why Tracking may trigger spam filters?</h3>
          <div className='bodyOne m-3 p-3'>
                    To know why you need to know how attacking works in the background. how email marketing application know if someone opened the email or clicked on a link?

                    Simply, when you enable tracking, what happens is that automatically a small hidden image will be added to your email. this hidden image will have the source attribute as a Link which is responsible for connecting to an online service and sending information about the email.

                    So when someone opens an email, this hidden image will load automatically and the link will be executed informing the server that this email is opened.
          </div>
               <h3 className='p-3 m-3'>How Email Open Tracking works.</h3>
          <div className='bodyOne m-3 p-3'>
                    <strong>And what about tracking Clicked links?</strong>
          </div>
          <div className='body2 m-3 p-3'>
                    Now to track clicks, what will happen is that all the links in the email will be replaced by other URLs by the email service or application. so, in reality, we track special URLs and not the real URLs.

                    so when these special Links are clicked it can be recorded by the email service then it redirects the user to the target URL.
          </div>
          <div className='bodyOne m-3 p-3'>
                    So after we understood how tracking works, I think you know why it may trigger spam filters? yes?

                    Simply, you need also to ensure that the tracking URLs are safe and not blacklisted.

                    Also as a good practice, if you are using an SMTP service like Sendgrid or Sparkpost, or any other SMTP service, or maybe if you are using your own SMTP server. configure always a custom domain for tracking other than your main domain.

                    You can look at the image again, and you will see the tracking link in red is using a domain other than “h-educate“.

                   <strong> Done with tracking? Great!</strong> ✔️
          </div>
               <h3 className='m-3 p-3'>5. Sending Score</h3>
          <div className='bodyOne m-3 p-3'>
                    Sending score is very important, and in short, you must ensure at least 9/10 – 10/10 as a sensing score in Mail-tester.
          </div>
          <div className='bodyOne m-3 p-3'>
                    How to get the best sending score?
          </div>
          <div className='bodyOne m-3 p-3'>
                    Mainly to get almost 10/10, you should take care of the following:
          </div>
          <div className='body2 m-3 p-3'>
<ol>
                         <li>SPF (Sender Policy Framework)</li>
                         <li>DKIM ( DomainKeys Identified Mail )</li>
                         <li>DMARC</li>
                         <li>Reverse DNS (PTR)</li>
                         <li>Message body.</li>
</ol>
          </div>
               <h2>1. SPF (Sender Policy Framework)</h2>
          <div className='bodyOne m-3 p-3'>
                    An SPF record is a TXT record that is added to your Domain DNS Zone and allows you to set the mail servers that are allowed to send emails from your domain.

                    Messages sent from a server that isn’t included in the SPF record will be marked as spam or rejected.

                    As an example, you can’t send an email from your own server and set your sending email as “mail@google.com,” you can’t use google’s domain. It indicates that you are trying to spam.

                    In the same way, you can configure SPF and prevent anyone from using your domain to send emails,  So setting SPF is very important when it comes to making your domain trusted by other mailing providers.

                    Example of SPF. Open your DNS zone in and add the following record:
          </div>
          <div className='body2 m-3 p-3'>
                    v=spf1 a ip4:XXX.XXX.XXX.XXX ~all
          </div>
          <div className='body3 m-3 p-3'>
                    *Replace with your server IP.
          </div>
               <strong>Now only your server can send emails from your domain.</strong>
          <div className='bodyOne m-3 p-3'>
                    <h3>2. DKIM (DomainKeys Identified Mail).</h3>
          </div>
          <div className='bodyOne m-3 p-3'>
                    A Dkim record is also a text record in your DNS that holds a public authentication key. This key will be validated using a private key saved privately inside your server.
          </div>
          <div className='bodyOne m-3 p-3'>
                    All emails will be signed, and this will avoid any alterations and protect your email originality, and this is very important for your server to achieve high sending scores
          </div>
               <h3 className='p-3 m-3'>How to set Dkim?</h3>
          <div className='bodyOne m-3 p-3'>
                    This can't be answered since it depends on the SMTP service or server you are using. each has its own way to setup
          </div>
               <h3 className='p-3 m-3'>3. DMARC (Domain-based Message Authentication, Reporting & Conformance)</h3>
          <div className='bodyOne m-3 p-3'>
                    It is a Protocol that uses (SPF)  and (DKIM) to determine the authenticity of an email message.

                    DMARC makes it easier for Internet Service Providers (ISPs) to prevent malicious email practices, such as domain spoofing in order to phish for recipients’ personal information.

                    It allows email senders to specify how to handle emails that were not authenticated using SPF or DKIM. Senders can opt to send those emails to the junk folder or have them blocked them all together.
          </div>
               <h2 className='p-3 m-3'>4. Reverse DNS (PTR)</h2>
          <div className='bodyOne m-3 p-3'>
                    The reverse DNS is called a pointer record and is used to point your IP to your Domain, its the inverse of the regular DNS A record.

                    So when you call the IP, you will get the name. It is also an essential factor in setting up your mail server and increasing your sending score and reputatio
          </div>
               <h2 className='p-3 m-3'>5. Message body</h2>
          <div className='bodyOne m-3 p-3'>
                    I talked about the message body before, but I wanna add here three more points to take care of:

                    <strong>The first one</strong> is the message structure, just make sure that you don't have a lot of images in the email much more than text. keep it normal.

                   <strong>The second point</strong>  is to always ensure to have a text version of your email with HTML. Now, this is not so important because almost all email applications will generate the text version automatically, but keep it in mind if you face it one day!

                    The third one is to add unsubscribe links to your emails, now also this is done almost with all email marketing systems and applications, so keep it in mind.

                    Got 10/10 as a Sending score?? <strong>Great! ✔️</strong> what's next?
          </div>
               <h2 className='body2 p-3 m-3'>6. Sending Reputation</h2>
          <div className='bodyOne m-3 p-3'>
                    Now you have to know something very important, Sending Reputation is only something you can take care of if you are using your own SMTP server, or if you are using an SMTP service with a Dedicated IP.

                    Why? Because Sending Reputation is the Reputation of the sending IP address
          </div>
          <div className='bodyOne m-3 p-3'>
                    How to get a good sending reputation?
          </div>
          <div className='bodyOne m-3 p-3'>
                    <strong>Short answer: Warmup your STMP Server.</strong>
          </div>
               <h2 className='p-3 m-3'>What is Warming Up IP?</h2>
          <div className='bodyOne m-3 p-3'>
                    When you have a new Brand IP Address for your SMTP, this IP will have no Reputation on the internet, and ISPs (internet service providers) doest know this IP.

                    So IP warmup is the practice of building Your Reputation on The Internet by gradually increasing the volume of mail sent with your IP address according to a predetermined schedule.
          </div>
          <div className='bodyOne m-3 p-3'>
                    <div className="p-3 m-0">
                         <img className="first" src={lastt} alt="tu sam"></img>
                    </div> 
          </div>
               <h2 className='p-3 m-3'>7. Email List Health</h2>
          <div className='bodyOne m-3 p-3'>
                    When you are sending emails, you are sending it to a target email list. this email list must be healthy!

                    What do we mean by a healthy email list?

                    Simply, We say an Email List is Healthy, when
          </div>
          <div className='bodyOne m-3 p-3'>
<ol>
                         <li>All Emails Are Valid.</li>
                         <li>No Spam Traps.</li>
                         <li>Complaint rate.</li>
                         <li>Active users.</li>
</ol>
          </div>
               <strong>1. All Emails Are Valid. (~ 0% Bounce rate)</strong>
          <div className='bodyOne m-3 p-3'>
                    If you are collecting emails through option forms on your website, ensure to enable double options so all users will verify their emails to subscribe to your lists.

                    If you are a cold email marketer, you need to validate all your emails before sending any campaign. and it's better to use an online verification service to achieve this.

                    Free Email validation? YES. you can use H-supertools free email validation services to validate your emails 100% free.

                    A high percentage of bounced emails like (5-10) % may destroy your reputation.
          </div>
          <div className='bodyOne m-3 p-3'>
<h2 className='p-3 m-3'>2. No Spam Traps.</h2>
          </div>
          <div className='bodyOne m-3 p-3'>
                    Does your email list contain any <strong>spam </strong>traps!? what is a spam trap?

                    In the fight against spam, some organizations use spam traps to find and block spammers. A spam trap is an email address that’s not actively used but is actively monitored. If a spam trap receives an email, then the sender fell in the trap! because that email address never opted in to receive emails. and it's not an active email.

                    How to check for spam traps? simply by email validation.

                    Again, you can use H-supertools free email validation services to detect any spam trap in your Lists.

                    Learn more about spam traps and how to avoid in this video:

                    https://youtu.be/ZKL9jHMu0LI
                    A high percentage of spam traps like (1-2) % may destroy your reputation.
          </div>
               <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>3. Complaint rate.</h2>
                    The complaint rate is a rate that shows how often your subscribers complain to mailbox providers about receiving your email and report you as spam.

                    The best way to get an almost 0% complaint rate, is to target the correct people in your emails.

                    And the second thing is to write the perfect email that simply doesn't look like spam!

                    As a Good Practice, when you finish writing your email copy, just send it to your email. and put your self instead of the recipient. and ask your self?

                    Does the email look spammy?!! the answer will make you run the campaign OR change the message.

                    A high percentage of Complaint rate like (2-3) % may destroy your reputation.
               </div>
               <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>4. Active Users.</h2>
                    Another important factor that determines the health of your email list, is used activity.

                    When you send an email, how many users open it? how many users click on the links?

                    So as a good practice, like every 2-3 months, just delete all inactive users, because they will hurt your overall email list health.

                    But! Maybe your emails are not reaching the inbox, so anyway, you will get no activity. so start deleting inactive users after you ensure that you followed all that is mentioned in this guide.

                    Your Email List is Healthy?<strong>Great </strong> ✔️
               </div>
               <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>8. More Tips</h2>
                    <strong>A/B Split Testing</strong>
                    A/B testing, in the context of email, is the process of sending one variation of your campaign to a subset of your subscribers and a different variation to another subset of subscribers, with the ultimate goal of working out which variation of the campaign garners the best results.

                    As an example, you create two email templates, and you send the first template to 50% of your subscribers, and the other template to 50%.

                    You can Also Split Test SMTP services, Subject Lines, callouts, or anything you wanna test.

                    and according to the results, you can know what best woods for you, so you rely on in your email marketing strategies and campaigns.
               </div>
               <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>Test Before You Send!</h2>
                    Now After you ensured your system is almost perfect, the best thing to do is to test it before you send any campaign, to see how it's performing.
               </div>
               <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>How to Test Your Campaign?</h2>
                    Other than Mail-tester and getting your sending score, you need to test how your emails are really performing. so the way I prefer is to use the Inbox Tool by Gmass.

                    It will help you understand and see in live how your emails are performing by sending your email to like 19 email accounts and each secured with different security software then you will see if your email is passing spam filters or not.
               </div>
               <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>Sum up!.</h2>
                    Someone may ask if you follow all this, does it mean all my emails will 100% land in the inbox?

                    unfortunately No! There is nothing 100% perfect, but we ware trying to do here is to make sure like up to 90% of our campaigns reach the inbox.
               </div>
               <div className='bodyOne m-3 p-3'>
                    <h2 className='p-3 m-3'>OK. We Cover It:</h2>
                    <ol>
                         <li>Subject Line & Message Body. (Avoid Spammy Triggers ✔️ )</li>
                         <li>Sending Domain Status. (Check if blacklisted ✔️ )</li>
                         <li>URL & Links. (Check if blacklisted, Avoid Affiliate Links ✔️ )</li>
                         <li>Email Tracking. (Tracking Domain ✔️ )</li>
                         <li>Sending Score. (SPF, DKIM, rDNS, DMARC, Message body ✔️ )</li>
                         <li>Sending Reputation. (Warmup your server ✔️ )</li>
                         <li>Email List Health. (Bounce, Complaint, Spam Traps, Active Users ✔️ )</li>
                         <li>Important Tips ( A/B split test, Test Before Send ✔️ )</li>
                         <h3 className='p-3 m-3'>Good Luck! ❤️</h3>
                    </ol>
               </div>
               <div className="footers">
                    <footer className='p-3 m-3 '>
                         <div className='p-3'>
                              <span className="blink2">Ugo IT GmbH Technical Guide</span>
                              <div className="p-3 ">
                                   <div className="p-3 ">
                                        <div>Address: Schaffhauserstrasse 560, Zurich 8052, Switzerland </div>
                                        <div>Phone: +41772394440</div>
                                        <div className="emailF">email: <a style={{ textDecoration: 'none' }} href="mailto:webprogrammerstechnology@gmail.com">webprogrammerstechnology@gmail.com</a></div>
                                   </div>
                              </div>
                              <hr style={{ color: 'white' }}></hr>
                              <div className='foot'>
                                   <p>Copyright © 2023 Ugo IT GmbH LLC. All Rights Reserved. This site is protected by reCaptcha and the Privacy Policy and Terms of Service apply.</p>
                              </div>
                              <div className=''>
                                   <a href='https://www.termsfeed.com/live/5c4c21f7-91cf-4b18-92d5-aa7659f0a191'><button style={{ border: 'white' }} type="button" className="btn btn-light m-2 p-1">Terms</button></a>
                                   <a href='https://www.termsfeed.com/live/b2b41338-c5c8-40b8-8f50-f95b38850964'><button style={{ border: 'white' }} type="button" className="btn btn-light m-2 p-1">Policy</button></a>
                                   <a href='/contact'><button style={{ border: 'white' }} type="button" className="btn btn-light m-2 p-1">Contact</button></a>
                              </div>
                         </div>
                    </footer>
               </div>
          </div> 
          
     );
}

export default HowToLandEmailsInbox;