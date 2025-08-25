# Website Hosting Guide for PUC Services

## 1. Shared Hosting Options

Shared hosting is the most affordable and beginner-friendly option for hosting your website. Here are some recommended providers:

### Recommended Shared Hosting Providers

1. **Hostinger**
   - Starting at ₹99/month
   - User-friendly control panel
   - 24/7 customer support
   - Free domain for 1 year with some plans
   - Website: [Hostinger India](https://www.hostinger.in/)

2. **HostGator India**
   - Starting at ₹149/month
   - 99.9% uptime guarantee
   - Free SSL certificate
   - 24/7 support
   - Website: [HostGator India](https://www.hostgator.in/)

3. **BigRock**
   - Starting at ₹99/month
   - Indian company
   - Free domain with some plans
   - Website: [BigRock](https://www.bigrock.in/)

4. **GoDaddy India**
   - Starting at ₹199/month
   - Well-known brand
   - Easy-to-use interface
   - Website: [GoDaddy India](https://in.godaddy.com/)

### What to Look for in Shared Hosting

- **Pricing**: Look for plans within your budget (₹100-300/month is typical for basic plans)
- **Storage Space**: 5-10GB is sufficient for your simple website
- **Bandwidth**: Unlimited bandwidth is preferable
- **SSL Certificate**: Free SSL certificate for security
- **Customer Support**: 24/7 support, especially if you're new to hosting
- **Control Panel**: cPanel or similar user-friendly interface

## 2. Domain Registration

You'll need a domain name for your website (e.g., pucservices.in or pucservices.com).

### Steps to Register a Domain

1. **Choose a Domain Registrar**
   - You can use the same company as your hosting provider for convenience
   - Popular options: GoDaddy, BigRock, Hostinger, or NameCheap

2. **Search for Your Domain Name**
   - Try business-related names like:
     - pucservices.in
     - puccertificate.in
     - [your-city]-puc.in
     - fastagpuc.in

3. **Check Availability and Pricing**
   - .in domains typically cost ₹599-899/year
   - .com domains typically cost ₹899-1299/year

4. **Register the Domain**
   - Provide your contact information
   - Choose registration period (1-10 years)
   - Consider privacy protection to hide your personal information

5. **Complete Payment**
   - Most registrars accept credit/debit cards, UPI, and net banking

### Domain Management Tips

- Enable auto-renewal to avoid accidentally losing your domain
- Keep your contact information updated
- Secure your domain registrar account with a strong password and 2FA

## 3. Uploading Files to Web Hosting

Once you have hosting and a domain, you'll need to upload your website files.

### Method 1: Using File Manager in Control Panel

1. **Log in to your hosting control panel** (usually cPanel, Plesk, or custom panel)
2. **Find the File Manager tool**
3. **Navigate to the public_html or www folder**
4. **Upload your website files**:
   - Click "Upload" button
   - Select all files from your local folder (index.html, styles.css, script.js, logo.svg, favicon.svg)
   - Wait for upload to complete

### Method 2: Using FTP (File Transfer Protocol)

1. **Download an FTP client**:
   - FileZilla (free): [https://filezilla-project.org/](https://filezilla-project.org/)
   - WinSCP (Windows only): [https://winscp.net/](https://winscp.net/)

2. **Get FTP credentials from your hosting provider**:
   - FTP hostname (usually ftp.yourdomain.com)
   - FTP username
   - FTP password
   - Port (usually 21)

3. **Connect to your server**:
   - Enter credentials in your FTP client
   - Click connect

4. **Upload files**:
   - Navigate to public_html or www folder on the server
   - Drag and drop all your website files from your computer
   - Wait for transfer to complete

### Testing Your Website

After uploading:
1. Open a web browser
2. Enter your domain name (e.g., www.yourdomain.com)
3. Verify that your website loads correctly
4. Test all WhatsApp links on different devices

## 4. Free Hosting Alternatives

If you want to start with a free option before investing in paid hosting:

### GitHub Pages

1. **Create a GitHub account**: [https://github.com/](https://github.com/)
2. **Create a new repository** named `username.github.io` (replace username with your GitHub username)
3. **Upload your website files** to this repository
4. **Your website will be available** at `https://username.github.io`
5. **Limitations**:
   - Only static websites (which yours is, so it's compatible)
   - No custom domain without additional setup
   - Limited to 1GB storage

### Netlify

1. **Create a Netlify account**: [https://www.netlify.com/](https://www.netlify.com/)
2. **Drag and drop** your website folder to the Netlify dashboard
3. **Your site will be deployed** with a random subdomain (e.g., random-name.netlify.app)
4. **You can add a custom domain** later if you purchase one
5. **Advantages**:
   - Free SSL certificate
   - Global CDN
   - Continuous deployment options

### Vercel

1. **Create a Vercel account**: [https://vercel.com/](https://vercel.com/)
2. **Import your project** from a Git repository or upload directly
3. **Your site will be deployed** with a vercel.app subdomain
4. **Advantages**:
   - Fast global CDN
   - Free SSL certificate
   - Analytics

## 5. Basic Website Maintenance

To keep your website running smoothly:

### Regular Backups

1. **Download a complete copy** of your website files monthly
2. **Store backups** in multiple locations (cloud storage and local device)
3. **Most hosting providers** offer automatic backup services

### Updating Information

1. **To update rates or services**:
   - Edit the index.html file
   - Upload the modified file to your server using the same method as initial upload

2. **To update WhatsApp number** (if it changes):
   - Find all instances of your number in index.html
   - Replace with new number
   - Upload the updated file

### Security Maintenance

1. **Keep your hosting account credentials secure**
2. **Use strong passwords**
3. **Enable two-factor authentication** if available
4. **Check your website regularly** for any unauthorized changes

### Monitoring

1. **Regularly visit your website** to ensure it's loading properly
2. **Consider setting up free uptime monitoring** with services like:
   - UptimeRobot: [https://uptimerobot.com/](https://uptimerobot.com/)
   - Freshping: [https://www.freshworks.com/website-monitoring/](https://www.freshworks.com/website-monitoring/)

## Need Help?

If you encounter any issues with hosting setup, many hosting providers offer assistance through their customer support. You can also hire a local web developer for a small fee to help with the initial setup.