# Web Lab Experiments (2025-2026)

This repository contains 10 Web Lab experiments with minimal, clean UI styling.

## Folder Structure

1. 01_matomo_analytics
2. 02_typescript_calculator
3. 03_typescript_multilevel_inheritance
4. 04_angularjs_spa_basic
5. 05_angularjs_spa_services_events_validation_helpers
6. 06_ajax_search
7. 07_ajax_realtime_form_validation
8. 08_restful_api_mongodb
9. 09_flask_feedback_form
10. 10_flask_portfolio

## Quick Run Guide

### Experiments 1 to 7 (Frontend)
- Open each folder and run its index.html in a browser.
- For TypeScript experiments (2, 3), compiled JavaScript files are already included.

### Experiment 8 (REST API using MongoDB)
Path: 08_restful_api_mongodb

1. Install dependencies:
   npm install
2. Copy .env.example to .env and update values if needed.
3. Start local MongoDB service.
4. Run API:
   npm run dev

Default server URL: http://localhost:5000

Endpoints:
- GET /api/todos
- POST /api/todos
- PUT /api/todos/:id
- DELETE /api/todos/:id

### Experiment 9 (Flask Feedback Form)
Path: 09_flask_feedback_form

1. Create and activate virtual environment (recommended).
2. Install dependencies:
   pip install -r requirements.txt
3. Run:
   python app.py

Default URL: http://127.0.0.1:5000

### Experiment 10 (Flask Portfolio)
Path: 10_flask_portfolio

1. Create and activate virtual environment (recommended).
2. Install dependencies:
   pip install -r requirements.txt
3. Run:
   python app.py

Default URL: http://127.0.0.1:5000

## Notes
- CSS is intentionally basic and minimal.
- Titles and spacing are standardized for neat formatting.
- Matomo experiment uses placeholder Matomo URL and Site ID; update these in 01_matomo_analytics/script.js.
