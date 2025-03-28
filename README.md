# TODO:

### Page structure:

- home: pages/index.js
- product: pages/product/[product].js JJ
- product index (search results): pages/product/index.js

### Styling (feel free to edit styles/custom-bootstrap.scss):

- home: pages/index.js
- product: pages/product/[product].js
- product index (search results): pages/product/index.js

### Optional:

- Footer.js

# Back End:

## Phase 1: Core Functionality

- **Data Collection Layer**

  - Set up Open Food Facts API client
  - Create response parser for product data
  - Implement error handling for missing data

- **AI Estimation Fallback**
  - Set up GPT API integration
  - Design prompt templates for origin detection
  - Implement cost controls and rate limiting

## Phase 2: API Implementation

- **Estimation Endpoint**

  - Create `/api/estimate-origin` route
  - Build response formatter

- **Caching System**
  - Add Redis caching layer
  - Set TTL policies (24h default)
  - Implement cache invalidation
