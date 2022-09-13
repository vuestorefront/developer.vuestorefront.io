INSERT INTO "public"."quizzes"
  (
    id,
    title,
    questions,
    correct_answers,
    discord_role_id,
    passing_score
  )
VALUES
  (
    'commercetools',
    'commercetools',
    '[ { "title": "What''s the name of the UI library preinstalled in Vue Storefront projects?", "answers": [ "Vuetify", "CommerceUI", "StorefrontUI", "HeadlessUI" ] }, { "title": "Which framework powers Vue Storefront?", "answers": [ "Nuxt.js", "Next.js", "SvelteKit", "Remix" ] }, { "title": "Which file configures Server Middleware?", "answers": [ "nuxt.config.js", "middleware.config.js", "server.config.js", "vue.config.js" ] }, { "title": "Which rendering method is supported by Vue Storefront?", "answers": [ "Client-Side Rendering", "Server-Side Rendering", "Static Site Generation", "Trisomorphic Rendering" ] }, { "title": "What type of API do custom queries work with?", "answers": [ "SOAP", "REST", "GraphQL", "All of the above" ] }, { "title": "What is the name of the session for a customer that is not logged in, but created a cart or a wishlist?", "answers": [ "Local session", "Anonymous session", "User session", "Guest session" ] }, { "title": "Which state management library is used in commercetools integration?", "answers": [ "Pinia", "Vuex", "Redux", "None of the above" ] }, { "title": "Click & Collect is also called", "answers": [ "CIS", "C&P", "BOPIS", "COPIS" ] }, { "title": "What are three possible values for tracking the inventory (which affects product availability)?", "answers": [ "TrackOnly, ReserveOnOrder, None", "Platform, External, Disabled", "LineItemLevel, UnitPriceLevel, None", "Standard, GiftLineItem, Disabled" ] }, { "title": "Which composable allows loading or selecting shipping method for the current cart?", "answers": [ "useCart", "useMakeOrder", "UseShipping", "useShippingProvider" ] } ]',
    '[ "StorefrontUI", "Nuxt.js", "middleware.config.js", "Server-Side Rendering", "GraphQL", "Anonymous session", "None of the above", "BOPIS", "TrackOnly, ReserveOnOrder, None", "useShippingProvider" ]',
    '1010169214440579102',
    80
  );