# Digital Service Center Website

A responsive static website for a local digital service center that presents public-document support services in a clean, accessible, and user-friendly interface. The project highlights available services, displays pricing, shares important updates, provides contact access, and includes dedicated guide pages for each service.

The website is designed for visitors who need quick information about document-related services such as Aadhaar updates, PAN applications, voter card corrections, passport assistance, and income certificate support.

## Features

- Animated logo entry screen for a polished first impression.
- Sticky branded header with center name and owner/operator details.
- Service cards with images, short descriptions, guide links, and prices.
- Individual service guide pages with processing time, service explanation, and required documents.
- Contact details panel with interactive reveal and close behavior.
- "What's New" notification box for announcements and service updates.
- Video section for visual branding and engagement.
- Responsive layout for desktop, tablet, and mobile screens.
- Hover and focus interactions for cards, buttons, contact details, and notifications.
- Modular CSS files for easier styling and maintenance.

## Tech Stack

- **HTML5** for semantic page structure.
- **CSS3** for layout, animations, responsiveness, and visual styling.
- **JavaScript** for interactive contact detail toggling.
- **Static assets** including service icons, logo image, and video media.

## Project Structure

```text
../
|-- index.html
|-- README.md
|-- css/
|   |-- body.css
|   |-- Contact(Quick_actions).css
|   |-- footer.css
|   |-- Guide_style.css
|   |-- header.css
|   |-- Notifications.css
|   |-- Services_card.css
|   `-- style.css
|-- images/
|   |-- CSC-logo.png
|   |-- favicon.png
|   `-- services/
|       |-- Aadhaar.png
|       |-- Income Cert.png
|       |-- Pan Apply.png
|       |-- Pan.png
|       |-- Passport.png
|       `-- Voter.png
|-- PDF/
|   |-- PDF.html
|   |-- Project Report pdf.pdf
|-- JS/
|   `-- JS.js
|-- Service Guide/
|   |-- Aadhaar card update.html
|   |-- Income_certificate.html
|   |-- Pan_application.html
|   |-- Pan_card_Update.html
|   |-- Passport.html
|   `-- Voter Card Update.html
`-- video/
    `-- CSC.mp4

```

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Main landing page with header, video, services, contact details, and notifications. |
| `Service Guide/Aadhaar card update.html` | Details for Aadhaar update service and required documents. |
| `Service Guide/Pan_application.html` | Details for new PAN card application service. |
| `Service Guide/Pan_card_Update.html` | Details for PAN card correction/update service. |
| `Service Guide/Passport.html` | Details for passport application and update assistance. |
| `Service Guide/Voter Card Update.html` | Details for voter card correction/update service. |
| `Service Guide/Income_certificate.html` | Details for income certificate support. |

## Main Services

- Aadhaar Card Update
- Voter Card Update
- New PAN Application
- PAN Card Update
- Passport Services
- Income Certificate

## How to Run

This is a static website and does not require a backend server.

1. Open the project folder.
2. Open `index.html` in any modern browser.
3. Use the service cards to navigate to guide pages.

For a local development server, you can run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Styling Overview

The project uses separate CSS files for different UI areas:

- `style.css` controls the body background animation and logo entry effect.
- `header.css` styles the sticky header and name animation.
- `body.css` manages the video section and main responsive layout.
- `Services_card.css` controls the service card grid, hover states, focus states, image layout, and price reveal.
- `Contact(Quick_actions).css` styles the contact detail panel and its expanded state.
- `Notifications.css` styles the announcement panel and scrolling notification list.
- `Guide_style.css` styles the individual service guide pages.
- `footer.css` styles the footer area.

## JavaScript Behavior

The JavaScript file `JS/JS.js` handles the contact detail panel:

- Selects the **View** button and contact box.
- Expands the contact panel when the button is clicked.
- Changes the button text from `View` to `Close`.
- Collapses the panel when clicked again.
- Adds and removes CSS classes to trigger visual transitions.

## Responsive Design

The website includes media queries for smaller screens:

- Service cards shift from a grid layout to compact mobile cards.
- Contact and notification panels adapt to mobile widths.
- The video section scales for smaller viewports.
- Header text size adjusts for readability on mobile devices.

## Deployment Notes

- The project can be hosted on any static hosting platform such as GitHub Pages, Netlify, Vercel, or a standard web server.
- Keep image, video, CSS, and JavaScript folder paths unchanged unless the links in `index.html` are updated.
- On case-sensitive hosting environments, make sure linked filenames match the actual filenames exactly.

## Author

Created, designed, and modified by **Guriqbal Singh**.
