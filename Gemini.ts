Gemini 4 Argon
Ran for 24m 13s

summarize_auto
Action history
chevron_right
lightbulb
Thought for 12 seconds
description
Read file
Read 1 file: skills/system_skills/ultra_mode/SKILL.md from line 0 to line 287
point_scan
Explored codebase
Scanned src and found 9 files: App.tsx, components, hooks, index.css, lib, main.tsx, services, types and utils.
description
Read file
Read 3 files: src/utils/ticketRules.ts from line 350 to line 1599,src/utils/ticketRules.ts from line 1600 to line 2269, and src/utils/ticketRules.test.ts from line 600 to line 1902
point_scan
Explored codebase
Scanned src/components and found 8 files: AdminPanelView.tsx, BrandLogo.tsx, CheckoutView.tsx, ClientAreaView.tsx, EventDetailView.tsx, Footer.tsx, HomeView.tsx and Navbar.tsx.
point_scan
Explored codebase
Scanned src/services and found 1 file: platformService.ts.
point_scan
Explored codebase
Scanned src/lib and found 2 files: supabase.test.ts and supabase.ts.
description
Read file
Read 1 file: src/utils/ticketRules.test.ts from line 1779 to line 1902
lightbulb
Thought for 7 seconds
point_scan
Explored codebase
Scanned root directory and found 13 files: .aistudio, .env.example, .gitignore, bun.lock, dev-dist, index.html, metadata.json, package.json, public, src, supabase, tsconfig.json and vite.config.ts.
point_scan
Explored codebase
Scanned supabase and found 2 files: README_MIGRATIONS.md and migrations.
description
Read file
Read 3 files: src/components/AdminPanelView.tsx from line 0 to line 599,src/components/CheckoutView.tsx from line 0 to line 539, and src/App.tsx from line 0 to line 599
lightbulb
Thought for 5 seconds
terminal
Ran command
which psql postgres pg_ctl || true
lightbulb
Thought for 11 seconds
description
Read file
Read 3 files: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 0 to line 799,supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 800 to line 1599, and supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 1600 to line 2241
lightbulb
Thought for 2 minutes 3 seconds
description
Read file
Read 3 files: supabase/migrations/001_initial_schema.sql from line 329 to line 419,supabase/migrations/001_initial_schema.sql from line 549 to line 749, and supabase/migrations/001_initial_schema.sql from line 0 to line 329
lightbulb
Thought for 1 minute 12 seconds
description
Read file
Read 1 file: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 344 to line 369
lightbulb
Thought for 11 seconds
description
Read file
Read 1 file: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 299 to line 319
lightbulb
Thought for 7 seconds
description
Read file
Read 1 file: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 594 to line 619
edit
Edited 1 file
supabase/migrations/002_rpc_contracts_permissions_idempotency.sql
check_circle
lightbulb
Thought for 9 seconds
description
Read file
Read 3 files: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 1049 to line 1559,supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 849 to line 2427, and supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 1964 to line 2427
lightbulb
Thought for 6 seconds
description
Read file
Read 1 file: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 789 to line 859
lightbulb
Thought for 6 minutes 57 seconds
edit
Edited 1 file
supabase/migrations/002_rpc_contracts_permissions_idempotency.sql
check_circle
lightbulb
Thought for 7 seconds
description
Read file
Read 1 file: src/types/domain.ts from line 0 to line 422
lightbulb
Thought for 18 seconds
edit
Edited 1 file
src/types/domain.ts
check_circle
lightbulb
Thought for 7 seconds
description
Read file
Read 3 files: src/utils/ticketRules.ts from line 49 to line 159,src/utils/ticketRules.ts from line 699 to line 1249, and src/utils/ticketRules.ts from line 1799 to line 2269
lightbulb
Thought for 11 seconds
description
Read file
Read 2 files: src/utils/ticketRules.test.ts from line 899 to line 1317, and src/utils/ticketRules.test.ts from line 1317 to line 1902
lightbulb
Thought for 17 seconds
edit
Edited 1 file
src/utils/ticketRules.ts
check_circle
lightbulb
Thought for 5 seconds
description
Read file
Read 1 file: src/utils/ticketRules.ts from line 1919 to line 2294
edit
Edited 1 file
src/utils/ticketRules.ts
check_circle
lightbulb
Thought for 7 seconds
description
Read file
Read 3 files: src/services/platformService.ts from line 899 to line 1212,src/services/platformService.ts from line 1399 to line 1804, and src/services/platformService.ts from line 0 to line 59
lightbulb
Thought for 45 seconds
edit
Edited 1 file
src/services/platformService.ts
check_circle
lightbulb
Thought for 14 seconds
description
Read file
Read 1 file: src/utils/ticketRules.test.ts from line 0 to line 59
lightbulb
Thought for 53 seconds
edit
Edited 1 file
src/utils/ticketRules.test.ts
check_circle
lightbulb
Thought for 6 seconds
terminal
Ran command
npx tsx --test src/utils/ticketRules.test.ts && npx tsc --noEmit && npm run build
<truncated 23 bytes>
heck, non-null amount, BRL currency, external_reference binding, and idempotent replay  ---  duration_ms: 0.984714  type: 'test'  ...# Subtest: backfillTicketItemSequences deterministically assigns gap-free item_sequence and aborts on orphans, out-of-range, or excess duplicatesok 11 - backfillTicketItemSequences deterministically assigns gap-free item_sequence and aborts on orphans, out-of-range, or excess duplicates  ---  duration_ms: 0.670686  type: 'test'  ...# Subtest: migration 002 SQL file enforces strict Mercado Pago verification, no current_user misuse, deterministic backfill, and RLS-compatible permissionsok 12 - migration 002 SQL file enforces strict Mercado Pago verification, no current_user misuse, deterministic backfill, and RLS-compatible permissions  ---  duration_ms: 2.525764  type: 'test'  ...# Subtest: assemblePublishedEventsCatalog filters only published events, sorts by event_date ASC, maps active categories/batches, and normalizes category_slugok 13 - assemblePublishedEventsCatalog filters only published events, sorts by event_date ASC, maps active categories/batches, and normalizes category_slug  ---  duration_ms: 271.412703  type: 'test'  ...# Subtest: buildSafeSignUpMetadata validates customer signup data and never exposes or allows role escalation in user_metadataok 14 - buildSafeSignUpMetadata validates customer signup data and never exposes or allows role escalation in user_metadata  ---  duration_ms: 0.508271  type: 'test'  ...# Subtest: evaluateAdminAccess enforces strict authorization for disconnected user, common customer, missing profile, and authorized admin/SUPER_ADMINok 15 - evaluateAdminAccess enforces strict authorization for disconnected user, common customer, missing profile, and authorized admin/SUPER_ADMIN  ---  duration_ms: 12.072084  type: 'test'  ...# Subtest: generateEventSlug normalizes accents, enforces lowercase kebab-case, and deduplicates against existing slugsok 16 - generateEventSlug normalizes accents, enforces lowercase kebab-case, and deduplicates against existing slugs  ---  duration_ms: 0.558768  type: 'test'  ...# Subtest: parseEventDateToIso converts DD/MM/YYYY and YYYY-MM-DD to valid PostgreSQL DATE and rejects impossible datesok 17 - parseEventDateToIso converts DD/MM/YYYY and YYYY-MM-DD to valid PostgreSQL DATE and rejects impossible dates  ---  duration_ms: 0.580772  type: 'test'  ...# Subtest: validateAndBuildEventWritePayload validates required fields, maps status and category, and enforces capacity >= ticketsSoldok 18 - validateAndBuildEventWritePayload validates required fields, maps status and category, and enforces capacity >= ticketsSold  ---  duration_ms: 1.424766  type: 'test'  ...# Subtest: assembleAdminEventsCatalog includes draft and published events with empty lots when no batches exist, and translateEventDatabaseError explains constraints clearlyok 19 - assembleAdminEventsCatalog includes draft and published events with empty lots when no batches exist, and translateEventDatabaseError explains constraints clearly  ---  duration_ms: 0.848074  type: 'test'  ...# Subtest: admin event service functions reject unauthenticated callers before executing database mutationsok 20 - admin event service functions reject unauthenticated callers before executing database mutations  ---  duration_ms: 1.982425  type: 'test'  ...# Subtest: validateBatchStockAvailability enforces global event capacity across multiple batches (sold + reserved across all batches)ok 21 - validateBatchStockAvailability enforces global event capacity across multiple batches (sold + reserved across all batches)  ---  duration_ms: 0.221555  type: 'test'  ...# Subtest: issueTicketsWithCollisionRetry retries ONLY on whitelisted constraints (tickets_code_key, tickets_qr_payload_key) and aborts immediately on any other unique violationok 22 - issueTicketsWithCollisionRetry retries ONLY on whitelisted constraints (tickets_code_key, tickets_qr_payload_key) and aborts immediately on any other unique violation  ---  duration_ms: 0.776283  type: 'test'  ...# Subtest: evaluateReleaseExpiredReservationsAccess allows service_role, authenticated admin, and direct DB admin session while rejecting anon and common usersok 23 - evaluateReleaseExpiredReservationsAccess allows service_role, authenticated admin, and direct DB admin session while rejecting anon and common users  ---  duration_ms: 0.271443  type: 'test'  ...# Subtest: evaluateBatchAllocationIntegrity enforces immutable event_id, active + inactive batch allocation bounds, order counter reconciliation, and safe deactivationok 24 - evaluateBatchAllocationIntegrity enforces immutable event_id, active + inactive batch allocation bounds, order counter reconciliation, and safe deactivation  ---  duration_ms: 0.50376  type: 'test'  ...# Subtest: evaluateProfileUpdateIntegrity protects immutable id and created_at fields and blocks unauthorized role escalationok 25 - evaluateProfileUpdateIntegrity protects immutable id and created_at fields and blocks unauthorized role escalation  ---  duration_ms: 0.279524  type: 'test'  ...# Subtest: evaluateBatchAllocationIntegrity and evaluateEventCapacityUpdateIntegrity allow payment confirmation, expiration, and admin remediation under historical over-offer while blocking new or expanded invalid offersok 26 - evaluateBatchAllocationIntegrity and evaluateEventCapacityUpdateIntegrity allow payment confirmation, expiration, and admin remediation under historical over-offer while blocking new or expanded invalid offers  ---  duration_ms: 0.399273  type: 'test'  ...# Subtest: auditDatabaseCountersIntegrity and evaluateOrderMutationIntegrity detect counter divergences and block direct order tamperingok 27 - auditDatabaseCountersIntegrity and evaluateOrderMutationIntegrity detect counter divergences and block direct order tampering  ---  duration_ms: 0.824221  type: 'test'  ...# Subtest: migration 002 SQL enforces unified lock hierarchy, pre-flight counter audits, deferred reconciliation triggers, and zero custom GUC variablesnot ok 28 - migration 002 SQL enforces unified lock hierarchy, pre-flight counter audits, deferred reconciliation triggers, and zero custom GUC variables  ---  duration_ms: 13.892483  type: 'test'  location: '/app/applet/src/utils/ticketRules.test.ts:1853:1'  failureType: 'testCodeFailure'  error: |-    The expression evaluated to a falsy value:          assert.ok(sql.includes('WHERE t.id = r.ticket_id\n    AND t.item_sequence IS NULL;'))      code: 'ERR_ASSERTION'  name: 'AssertionError'  expected: true  actual: false  operator: '=='  stack: |-    TestContext.<anonymous> (/app/applet/src/utils/ticketRules.test.ts:1905:10)    Test.runInAsyncScope (node:async_hooks:214:14)    Test.run (node:internal/test_runner/test:1047:25)    Test.processPendingSubtests (node:internal/test_runner/test:744:18)    Test.postRun (node:internal/test_runner/test:1173:19)    Test.run (node:internal/test_runner/test:1101:12)    async Test.processPendingSubtests (node:internal/test_runner/test:744:7)  ...# Subtest: evaluateOrderCancellation and evaluateOrderRefund enforce full-order state machine, counter adjustments, and block partial or post-checkin refundsok 29 - evaluateOrderCancellation and evaluateOrderRefund enforce full-order state machine, counter adjustments, and block partial or post-checkin refunds  ---  duration_ms: 0.904583  type: 'test'  ...# Subtest: evaluateTicketMutationIntegrity and verifyAndProcessCheckin enforce ticket immutability, block used -> paid/refunded reversal, and block check-in of refunded ticketsok 30 - evaluateTicketMutationIntegrity and verifyAndProcessCheckin enforce ticket immutability, block used -> paid/refunded reversal, and block check-in of refunded tickets  ---  duration_ms: 0.599075  type: 'test'  ...# Subtest: evaluateLatePaymentConciliation records late payment incidents on expired/cancelled orders without ever issuing ticketsok 31 - evaluateLatePaymentConciliation records late payment incidents on expired/cancelled orders without ever issuing tickets  ---  duration_ms: 0.427538  type: 'test'  ...1..31# tests 31# suites 0# pass 30# fail 1# cancelled 0# skipped 0# todo 0# duration_ms 885.729051
lightbulb
Thought for 16 seconds
description
Read file
Read 1 file: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 304 to line 359
lightbulb
Thought for 8 seconds
edit
Edited 1 file
src/utils/ticketRules.test.ts
check_circle
lightbulb
Thought for 7 seconds
description
Read file
Read 1 file: supabase/migrations/002_rpc_contracts_permissions_idempotency.sql from line 2349 to line 3745
terminal
Ran command
npx tsx --test src/utils/ticketRules.test.ts && npx tsc --noEmit && npm run build && git status -s && git diff --stat
<truncated 23 bytes>
ad from reserve_ticket_order and rejects raw UUID  ---  duration_ms: 0.325728  type: 'test'  ...# Subtest: normalizeCheckinRpcResponse aligns result/status_reason and ticket_code/code fieldsok 9 - normalizeCheckinRpcResponse aligns result/status_reason and ticket_code/code fields  ---  duration_ms: 0.581271  type: 'test'  ...# Subtest: evaluatePaymentConfirmationIdempotency enforces official MP API check, non-null amount, BRL currency, external_reference binding, and idempotent replayok 10 - evaluatePaymentConfirmationIdempotency enforces official MP API check, non-null amount, BRL currency, external_reference binding, and idempotent replay  ---  duration_ms: 0.922151  type: 'test'  ...# Subtest: backfillTicketItemSequences deterministically assigns gap-free item_sequence and aborts on orphans, out-of-range, or excess duplicatesok 11 - backfillTicketItemSequences deterministically assigns gap-free item_sequence and aborts on orphans, out-of-range, or excess duplicates  ---  duration_ms: 0.598772  type: 'test'  ...# Subtest: migration 002 SQL file enforces strict Mercado Pago verification, no current_user misuse, deterministic backfill, and RLS-compatible permissionsok 12 - migration 002 SQL file enforces strict Mercado Pago verification, no current_user misuse, deterministic backfill, and RLS-compatible permissions  ---  duration_ms: 2.363333  type: 'test'  ...# Subtest: assemblePublishedEventsCatalog filters only published events, sorts by event_date ASC, maps active categories/batches, and normalizes category_slugok 13 - assemblePublishedEventsCatalog filters only published events, sorts by event_date ASC, maps active categories/batches, and normalizes category_slug  ---  duration_ms: 265.239122  type: 'test'  ...# Subtest: buildSafeSignUpMetadata validates customer signup data and never exposes or allows role escalation in user_metadataok 14 - buildSafeSignUpMetadata validates customer signup data and never exposes or allows role escalation in user_metadata  ---  duration_ms: 0.655155  type: 'test'  ...# Subtest: evaluateAdminAccess enforces strict authorization for disconnected user, common customer, missing profile, and authorized admin/SUPER_ADMINok 15 - evaluateAdminAccess enforces strict authorization for disconnected user, common customer, missing profile, and authorized admin/SUPER_ADMIN  ---  duration_ms: 12.392758  type: 'test'  ...# Subtest: generateEventSlug normalizes accents, enforces lowercase kebab-case, and deduplicates against existing slugsok 16 - generateEventSlug normalizes accents, enforces lowercase kebab-case, and deduplicates against existing slugs  ---  duration_ms: 0.707593  type: 'test'  ...# Subtest: parseEventDateToIso converts DD/MM/YYYY and YYYY-MM-DD to valid PostgreSQL DATE and rejects impossible datesok 17 - parseEventDateToIso converts DD/MM/YYYY and YYYY-MM-DD to valid PostgreSQL DATE and rejects impossible dates  ---  duration_ms: 0.564432  type: 'test'  ...# Subtest: validateAndBuildEventWritePayload validates required fields, maps status and category, and enforces capacity >= ticketsSoldok 18 - validateAndBuildEventWritePayload validates required fields, maps status and category, and enforces capacity >= ticketsSold  ---  duration_ms: 1.712516  type: 'test'  ...# Subtest: assembleAdminEventsCatalog includes draft and published events with empty lots when no batches exist, and translateEventDatabaseError explains constraints clearlyok 19 - assembleAdminEventsCatalog includes draft and published events with empty lots when no batches exist, and translateEventDatabaseError explains constraints clearly  ---  duration_ms: 1.006472  type: 'test'  ...# Subtest: admin event service functions reject unauthenticated callers before executing database mutationsok 20 - admin event service functions reject unauthenticated callers before executing database mutations  ---  duration_ms: 2.440631  type: 'test'  ...# Subtest: validateBatchStockAvailability enforces global event capacity across multiple batches (sold + reserved across all batches)ok 21 - validateBatchStockAvailability enforces global event capacity across multiple batches (sold + reserved across all batches)  ---  duration_ms: 0.280077  type: 'test'  ...# Subtest: issueTicketsWithCollisionRetry retries ONLY on whitelisted constraints (tickets_code_key, tickets_qr_payload_key) and aborts immediately on any other unique violationok 22 - issueTicketsWithCollisionRetry retries ONLY on whitelisted constraints (tickets_code_key, tickets_qr_payload_key) and aborts immediately on any other unique violation  ---  duration_ms: 0.96278  type: 'test'  ...# Subtest: evaluateReleaseExpiredReservationsAccess allows service_role, authenticated admin, and direct DB admin session while rejecting anon and common usersok 23 - evaluateReleaseExpiredReservationsAccess allows service_role, authenticated admin, and direct DB admin session while rejecting anon and common users  ---  duration_ms: 0.34451  type: 'test'  ...# Subtest: evaluateBatchAllocationIntegrity enforces immutable event_id, active + inactive batch allocation bounds, order counter reconciliation, and safe deactivationok 24 - evaluateBatchAllocationIntegrity enforces immutable event_id, active + inactive batch allocation bounds, order counter reconciliation, and safe deactivation  ---  duration_ms: 0.6668  type: 'test'  ...# Subtest: evaluateProfileUpdateIntegrity protects immutable id and created_at fields and blocks unauthorized role escalationok 25 - evaluateProfileUpdateIntegrity protects immutable id and created_at fields and blocks unauthorized role escalation  ---  duration_ms: 0.329207  type: 'test'  ...# Subtest: evaluateBatchAllocationIntegrity and evaluateEventCapacityUpdateIntegrity allow payment confirmation, expiration, and admin remediation under historical over-offer while blocking new or expanded invalid offersok 26 - evaluateBatchAllocationIntegrity and evaluateEventCapacityUpdateIntegrity allow payment confirmation, expiration, and admin remediation under historical over-offer while blocking new or expanded invalid offers  ---  duration_ms: 0.494  type: 'test'  ...# Subtest: auditDatabaseCountersIntegrity and evaluateOrderMutationIntegrity detect counter divergences and block direct order tamperingok 27 - auditDatabaseCountersIntegrity and evaluateOrderMutationIntegrity detect counter divergences and block direct order tampering  ---  duration_ms: 0.952724  type: 'test'  ...# Subtest: migration 002 SQL enforces unified lock hierarchy, pre-flight counter audits, deferred reconciliation triggers, and zero custom GUC variablesok 28 - migration 002 SQL enforces unified lock hierarchy, pre-flight counter audits, deferred reconciliation triggers, and zero custom GUC variables  ---  duration_ms: 2.012015  type: 'test'  ...# Subtest: evaluateOrderCancellation and evaluateOrderRefund enforce full-order state machine, counter adjustments, and block partial or post-checkin refundsok 29 - evaluateOrderCancellation and evaluateOrderRefund enforce full-order state machine, counter adjustments, and block partial or post-checkin refunds  ---  duration_ms: 0.908542  type: 'test'  ...# Subtest: evaluateTicketMutationIntegrity and verifyAndProcessCheckin enforce ticket immutability, block used -> paid/refunded reversal, and block check-in of refunded ticketsok 30 - evaluateTicketMutationIntegrity and verifyAndProcessCheckin enforce ticket immutability, block used -> paid/refunded reversal, and block check-in of refunded tickets  ---  duration_ms: 0.683353  type: 'test'  ...# Subtest: evaluateLatePaymentConciliation records late payment incidents on expired/cancelled orders without ever issuing ticketsok 31 - evaluateLatePaymentConciliation records late payment incidents on expired/cancelled orders without ever issuing tickets  ---  duration_ms: 0.444021  type: 'test'  ...1..31# tests 31# suites 0# pass 31# fail 0# cancelled 0# skipped 0# todo 0# duration_ms 827.289077src/utils/ticketRules.ts(2303,13): error TS2304: Cannot find name 'TicketStatus'.src/utils/ticketRules.ts(2317,13): error TS2304: Cannot find name 'TicketStatus'.src/utils/ticketRules.ts(2586,61): error TS2304: Cannot find name 'TicketStatus'.
description
Read file
Read 1 file: src/utils/ticketRules.ts from line 0 to line 44
edit
Edited 1 file
src/utils/ticketRules.ts
check_circle
terminal
Ran command
npx tsx --test src/utils/ticketRules.test.ts && npx tsc --noEmit && npm run build && git status -s && git diff --stat
<truncated 23 bytes>
rces strict Mercado Pago verification, no current_user misuse, deterministic backfill, and RLS-compatible permissionsok 12 - migration 002 SQL file enforces strict Mercado Pago verification, no current_user misuse, deterministic backfill, and RLS-compatible permissions  ---  duration_ms: 2.088076  type: 'test'  ...# Subtest: assemblePublishedEventsCatalog filters only published events, sorts by event_date ASC, maps active categories/batches, and normalizes category_slugok 13 - assemblePublishedEventsCatalog filters only published events, sorts by event_date ASC, maps active categories/batches, and normalizes category_slug  ---  duration_ms: 270.243938  type: 'test'  ...# Subtest: buildSafeSignUpMetadata validates customer signup data and never exposes or allows role escalation in user_metadataok 14 - buildSafeSignUpMetadata validates customer signup data and never exposes or allows role escalation in user_metadata  ---  duration_ms: 0.972649  type: 'test'  ...# Subtest: evaluateAdminAccess enforces strict authorization for disconnected user, common customer, missing profile, and authorized admin/SUPER_ADMINok 15 - evaluateAdminAccess enforces strict authorization for disconnected user, common customer, missing profile, and authorized admin/SUPER_ADMIN  ---  duration_ms: 12.243885  type: 'test'  ...# Subtest: generateEventSlug normalizes accents, enforces lowercase kebab-case, and deduplicates against existing slugsok 16 - generateEventSlug normalizes accents, enforces lowercase kebab-case, and deduplicates against existing slugs  ---  duration_ms: 0.557433  type: 'test'  ...# Subtest: parseEventDateToIso converts DD/MM/YYYY and YYYY-MM-DD to valid PostgreSQL DATE and rejects impossible datesok 17 - parseEventDateToIso converts DD/MM/YYYY and YYYY-MM-DD to valid PostgreSQL DATE and rejects impossible dates  ---  duration_ms: 0.542748  type: 'test'  ...# Subtest: validateAndBuildEventWritePayload validates required fields, maps status and category, and enforces capacity >= ticketsSoldok 18 - validateAndBuildEventWritePayload validates required fields, maps status and category, and enforces capacity >= ticketsSold  ---  duration_ms: 1.576299  type: 'test'  ...# Subtest: assembleAdminEventsCatalog includes draft and published events with empty lots when no batches exist, and translateEventDatabaseError explains constraints clearlyok 19 - assembleAdminEventsCatalog includes draft and published events with empty lots when no batches exist, and translateEventDatabaseError explains constraints clearly  ---  duration_ms: 0.892954  type: 'test'  ...# Subtest: admin event service functions reject unauthenticated callers before executing database mutationsok 20 - admin event service functions reject unauthenticated callers before executing database mutations  ---  duration_ms: 2.222727  type: 'test'  ...# Subtest: validateBatchStockAvailability enforces global event capacity across multiple batches (sold + reserved across all batches)ok 21 - validateBatchStockAvailability enforces global event capacity across multiple batches (sold + reserved across all batches)  ---  duration_ms: 0.241388  type: 'test'  ...# Subtest: issueTicketsWithCollisionRetry retries ONLY on whitelisted constraints (tickets_code_key, tickets_qr_payload_key) and aborts immediately on any other unique violationok 22 - issueTicketsWithCollisionRetry retries ONLY on whitelisted constraints (tickets_code_key, tickets_qr_payload_key) and aborts immediately on any other unique violation  ---  duration_ms: 0.833641  type: 'test'  ...# Subtest: evaluateReleaseExpiredReservationsAccess allows service_role, authenticated admin, and direct DB admin session while rejecting anon and common usersok 23 - evaluateReleaseExpiredReservationsAccess allows service_role, authenticated admin, and direct DB admin session while rejecting anon and common users  ---  duration_ms: 0.260722  type: 'test'  ...# Subtest: evaluateBatchAllocationIntegrity enforces immutable event_id, active + inactive batch allocation bounds, order counter reconciliation, and safe deactivationok 24 - evaluateBatchAllocationIntegrity enforces immutable event_id, active + inactive batch allocation bounds, order counter reconciliation, and safe deactivation  ---  duration_ms: 0.614736  type: 'test'  ...# Subtest: evaluateProfileUpdateIntegrity protects immutable id and created_at fields and blocks unauthorized role escalationok 25 - evaluateProfileUpdateIntegrity protects immutable id and created_at fields and blocks unauthorized role escalation  ---  duration_ms: 0.255784  type: 'test'  ...# Subtest: evaluateBatchAllocationIntegrity and evaluateEventCapacityUpdateIntegrity allow payment confirmation, expiration, and admin remediation under historical over-offer while blocking new or expanded invalid offersok 26 - evaluateBatchAllocationIntegrity and evaluateEventCapacityUpdateIntegrity allow payment confirmation, expiration, and admin remediation under historical over-offer while blocking new or expanded invalid offers  ---  duration_ms: 0.473849  type: 'test'  ...# Subtest: auditDatabaseCountersIntegrity and evaluateOrderMutationIntegrity detect counter divergences and block direct order tamperingok 27 - auditDatabaseCountersIntegrity and evaluateOrderMutationIntegrity detect counter divergences and block direct order tampering  ---  duration_ms: 0.954205  type: 'test'  ...# Subtest: migration 002 SQL enforces unified lock hierarchy, pre-flight counter audits, deferred reconciliation triggers, and zero custom GUC variablesok 28 - migration 002 SQL enforces unified lock hierarchy, pre-flight counter audits, deferred reconciliation triggers, and zero custom GUC variables  ---  duration_ms: 1.874391  type: 'test'  ...# Subtest: evaluateOrderCancellation and evaluateOrderRefund enforce full-order state machine, counter adjustments, and block partial or post-checkin refundsok 29 - evaluateOrderCancellation and evaluateOrderRefund enforce full-order state machine, counter adjustments, and block partial or post-checkin refunds  ---  duration_ms: 0.843158  type: 'test'  ...# Subtest: evaluateTicketMutationIntegrity and verifyAndProcessCheckin enforce ticket immutability, block used -> paid/refunded reversal, and block check-in of refunded ticketsok 30 - evaluateTicketMutationIntegrity and verifyAndProcessCheckin enforce ticket immutability, block used -> paid/refunded reversal, and block check-in of refunded tickets  ---  duration_ms: 0.619644  type: 'test'  ...# Subtest: evaluateLatePaymentConciliation records late payment incidents on expired/cancelled orders without ever issuing ticketsok 31 - evaluateLatePaymentConciliation records late payment incidents on expired/cancelled orders without ever issuing tickets  ---  duration_ms: 0.5052  type: 'test'  ...1..31# tests 31# suites 0# pass 31# fail 0# cancelled 0# skipped 0# todo 0# duration_ms 786.818667> react-example@0.0.0 build> vite build(!) Your Vite config uses features that are unsupported by `configLoader: 'native'`, which is planned to become the default in a future major version of Vite:  - `__dirname` (vite.config.ts:58:27). Use `import.meta.dirname` insteadSet `VITE_CONFIG_NATIVE_IGNORE_WARNING=true` to suppress this warning.vite v8.3.5 building client environment for production...transforming...✓ 1715 modules transformed.rendering chunks...computing gzip size...dist/registerSW.js                0.13 kBdist/manifest.webmanifest         0.57 kBdist/index.html                   2.03 kB │ gzip:   0.89 kBdist/assets/index-BzjSCmRk.css   51.92 kB │ gzip:   9.11 kBdist/assets/index-ByIY8gwc.js   916.79 kB │ gzip: 237.29 kB✓ built in 755ms[plugin builtin:vite-reporter] (!) Some chunks are larger than 500 kB after minification. Consider:- Using dynamic import() to code-split the application- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.PWA v2.0.0mode      generateSWprecache  26 entries (3472.13 KiB)files generated  dist/sw.js  dist/workbox-7e5eb42b.jsfatal: not a git repository (or any of the parent directories): .git
build
Built
O patch local e seguro da migration supabase/migrations/002_rpc_contracts_permissions_idempotency.sql e dos módulos TypeScript de suporte foi implementado, revisado e validado localmente sem qualquer conexão com o Supabase remoto, sem execução de migrations e sem alterar supabase/migrations/001_initial_schema.sql.
1. Lista dos Problemas Corrigidos
A-01 (Risco de Deadlock em DML direto sobre events e ticket_batches): Em PostgreSQL (ModifyTable / ExecUpdate / ExecDelete), o lock da tupla-alvo (FOR NO KEY UPDATE ou FOR UPDATE) é adquirido pelo executor antes da execução dos triggers BEFORE ROW (enforce_event_capacity_vs_batches e enforce_batch_within_event_capacity). Uma escrita administrativa direta (UPDATE/DELETE) sobre ticket_batches ou events invertia a ordem de bloqueio em relação às RPCs de inventário (reserve_ticket_order, confirm_order_payment, release_expired_reservations), permitindo ciclo de espera 
.
A-02 / M-01 (Lacuna na máquina de estados de Cancelamento e Reembolso de Pedidos e Ingressos): Faltavam regras transacionais completas para reembolso integral de pedidos pagos (paid 
 refunded), transição atômica dos ingressos emitidos (paid 
 refunded), bloqueio de reembolso parcial, bloqueio de reembolso após check-in (status = 'used'), bloqueio de reversão used 
 paid/refunded, imutabilidade dos campos estruturais de public.tickets e RPCs dedicadas para cancelamento (cancel_ticket_order) e reembolso (refund_ticket_order).
M-02 (Pré-auditoria e backfill da Seção 2 da migration 002):
O UPDATE da Seção 2.5 podia tocar linhas de public.tickets que já possuíam item_sequence preenchido;
As validações 2.7 (2.7.a a 2.7.d) e 2.8 precisavam contemplar explicitamente order_status = 'refunded', payment_status = 'refunded', tickets.status = 'refunded' e reservas ativas com payment_status IN ('pending', 'in_process').
M-03 (Ausência de índice em orders(ticket_batch_id)): As agregações e reconciliações por lote (WHERE o.ticket_batch_id = b.id) nas seções 2.7 e no trigger diferido enforce_event_inventory_reconciliation_deferred não contavam com índice dedicado em public.orders(ticket_batch_id).
M-04 (Cobertura de public.tickets nos Constraint Triggers Diferidos): Alterações diretas na tabela public.tickets não disparavam o constraint trigger diferido de reconciliação (enforce_event_inventory_reconciliation_deferred), e as RPCs multi-etapa precisavam declarar SET CONSTRAINTS ... DEFERRED incluindo o trigger de public.tickets.
B-01 (Pagamento aprovado no Mercado Pago após expiração/cancelamento da reserva): Faltava persistência estruturada e idempotente de incidente operacional quando um pagamento real chega aprovado no Mercado Pago após o pedido já estar expired ou cancelled, garantindo trilha de auditoria para estorno/conciliação sem jamais emitir ingressos sem estoque.
2. Explicação Técnica de Cada Correção
Objetivo 1 — Prevenção Determinística de Deadlock (A-01)
Documentado explicitamente nos cabeçalhos das seções 2.10 e 9.B o comportamento interno do executor do PostgreSQL (ExecUpdate/ExecDelete bloqueia a tupla antes de ExecBRUpdateTriggers/ExecBRDeleteTriggers).
Criadas 5 RPCs administrativas transacionais (SECURITY DEFINER, search_path = public) na Seção 9.B:
public.admin_update_event(...)
public.admin_update_event_status(p_event_id UUID, p_status TEXT)
public.admin_delete_event(p_event_id UUID)
public.admin_save_ticket_batch(...)
public.admin_delete_ticket_batch(p_batch_id UUID)
Todas essas RPCs validam public.is_admin_or_super(), executam SET CONSTRAINTS ... DEFERRED e adquirem:
pg_advisory_xact_lock(hashtext('px_event_inventory'), hashtext(v_event_id::text))
SELECT ... FROM public.events WHERE id = v_event_id FOR UPDATE
PERFORM 1 FROM public.ticket_batches WHERE event_id = v_event_id ORDER BY id ASC FOR UPDATE
antes de qualquer INSERT, UPDATE ou DELETE.
O serviço src/services/platformService.ts (updateEventInSupabase, updateEventStatusInSupabase, deleteEventInSupabase, saveTicketBatchInSupabase, deleteTicketBatchInSupabase) foi conectado a essas RPCs (mantendo fallback compatível apenas para erro PGRST202/42883 enquanto a migration 002 ainda não tiver sido aplicada no banco remoto).
Objetivo 2 — Máquina de Estados de Pedidos, Ingressos, Cancelamento e Reembolso
enforce_orders_integrity() (Seção 2.10.C):
Proíbe incondicionalmente DELETE em public.orders.
Protege campos imutáveis (id, user_id, event_id, ticket_batch_id, quantity, unit_price, subtotal_amount, fee_amount, total_amount, created_at).
Impõe a matriz exata de estados (pending, paid, cancelled, expired, refunded) e valida transições permitidas (pending -> paid | expired | cancelled, paid -> refunded).
Bloqueia transição paid -> refunded caso exista qualquer ingresso do pedido com status = 'used'.
enforce_ticket_order_integrity() (Seção 2.10.D):
Proíbe incondicionalmente DELETE em public.tickets.
Em INSERT: exige pedido paid/approved e status inicial 'paid'.
Em UPDATE: protege id, order_id, event_id, ticket_batch_id, user_id, holder_name, holder_email, code, qr_payload, item_sequence e created_at.
Permite exclusivamente as transições:
'paid' -> 'used' (com used_at IS NOT NULL, pedido pai paid/approved);
'paid' -> 'refunded' (com used_at IS NULL, pedido pai refunded/refunded).
Bloqueia explicitamente reversão 'used' -> 'paid' ou 'used' -> 'refunded'.
perform_ticket_checkin() (Seção 6):
Bloqueia a linha de public.tickets FOR UPDATE e public.orders FOR SHARE.
Rejeita ingressos com status IN ('cancelled', 'expired', 'refunded') ou pedido pai em estado não pago (result = 'invalid'), evitando check-in de ingresso reembolsado ou cancelado.
Novas RPCs cancel_ticket_order (Seção 9.C) e refund_ticket_order (Seção 9.D):
cancel_ticket_order(p_order_id, p_reason): cancela reserva pending (pelo próprio dono autenticado, admin ou service_role), libera reserved_quantity e é idempotente se já cancelled.
refund_ticket_order(p_order_id, p_mp_payment_id, p_reason): restrita a service_role ou admin; bloqueia reembolso se qualquer ingresso estiver used; transiciona o pedido integralmente para refunded/refunded, transiciona todos os orders.quantity ingressos de paid para refunded, e decrementa ticket_batches.sold_quantity e events.tickets_sold em orders.quantity.
Objetivo 3 — Ajustes na Pré-Auditoria e Backfill (Seções 2.5, 2.7 e 2.8)
Seção 2.5: Adicionado AND t.item_sequence IS NULL na cláusula WHERE do UPDATE public.tickets, garantindo que apenas ingressos legados sem item_sequence sejam atualizados.
Seção 2.7 (2.7.a a 2.7.d) e Seção 2.8:
2.7.a: valida simultaneamente pedidos paid (exigindo exatamente orders.quantity ingressos em ('paid', 'used') e zero refunded) e pedidos refunded (exigindo exatamente orders.quantity ingressos com status = 'refunded' e zero ativos).
2.7.b: verifica reserved_quantity frente à soma de pedidos order_status = 'pending' AND payment_status IN ('pending', 'in_process').
2.7.c e 2.7.d: reconciliam sold_quantity e events.tickets_sold frente a pedidos order_status = 'paid' AND payment_status = 'approved' (excluindo pedidos refunded).
2.8: rejeita estados contraditórios em pending, paid, expired, cancelled e refunded, bem como ingressos refunded presos a pedidos não reembolsados.
Objetivo 4 — Índice de Desempenho em orders(ticket_batch_id)
Adicionado CREATE INDEX IF NOT EXISTS idx_orders_ticket_batch_id ON public.orders(ticket_batch_id); na Seção 2.11.
Objetivo 5 — Constraint Triggers Diferidos em orders, ticket_batches e tickets
Adicionado CREATE CONSTRAINT TRIGGER trg_tickets_reconcile_counters_deferred AFTER INSERT OR UPDATE OR DELETE ON public.tickets DEFERRABLE INITIALLY IMMEDIATE FOR EACH ROW EXECUTE FUNCTION public.enforce_event_inventory_reconciliation_deferred(); na Seção 2.10.E.
Todas as RPCs que executam mutações compostas (reserve_ticket_order, confirm_order_payment, release_expired_reservations, admin_update_event, admin_update_event_status, admin_delete_event, admin_save_ticket_batch, admin_delete_ticket_batch, cancel_ticket_order, refund_ticket_order) declaram no início da transação:
code
SQL
SET CONSTRAINTS
  public.trg_orders_reconcile_counters_deferred,
  public.trg_batches_reconcile_counters_deferred,
  public.trg_tickets_reconcile_counters_deferred
DEFERRED;
Objetivo 6 — Tratamento de Pagamento Tardio Após Expiração/Cancelamento
Criada na Seção 9.E a tabela public.audit_logs (com RLS habilitado, leitura restrita a admins e índice único em idempotency_key) e a RPC public.record_late_payment_incident(...) (service_role only).
Quando o Mercado Pago notifica aprovação de um pagamento cujo pedido já se encontra expired ou cancelled, confirm_order_payment continua recusando a emissão de ingressos (Order cannot be confirmed from current status: ...), e o backend pode registrar idempotentemente o incidente via record_late_payment_incident (idempotency_key = 'late_payment:' || order_id || ':' || mp_payment_id) para estorno/conciliação financeira.
3. Ordem de Bloqueio Final de Todos os Fluxos Concorrentes
Para um evento 
:
Lock Transacional de Domínio: pg_advisory_xact_lock(hashtext('px_event_inventory'), hashtext(E::text))
Linha Pai do Evento: SELECT ... FROM public.events WHERE id = E FOR UPDATE
Linhas dos Lotes do Evento (Ordem Canônica): SELECT ... FROM public.ticket_batches WHERE event_id = E ORDER BY id ASC FOR UPDATE
Linhas de Pedidos (Ordem Canônica quando aplicável): SELECT ... FROM public.orders ... ORDER BY id ASC FOR UPDATE
Linhas de Ingressos (Ordem Canônica quando aplicável): SELECT ... FROM public.tickets WHERE order_id = O ORDER BY item_sequence ASC FOR UPDATE
Fluxo	Ordem de Aquisição de Locks	Ciclo de Espera Possível?
reserve_ticket_order	Advisory(
) 
 events(E) 
 ticket_batches(E, id ASC) 
 INSERT orders	Não
confirm_order_payment	Advisory(
) 
 events(E) 
 ticket_batches(E, id ASC) 
 orders(O) 
 INSERT tickets	Não
release_expired_reservations (por evento 
 em ordem event_id ASC)	Advisory(
) 
 events(E) 
 ticket_batches(E, id ASC) 
 orders(E, id ASC)	Não
cancel_ticket_order	Advisory(
) 
 events(E) 
 ticket_batches(E, id ASC) 
 orders(O)	Não
refund_ticket_order	Advisory(
) 
 events(E) 
 ticket_batches(E, id ASC) 
 orders(O) 
 tickets(O, item_sequence ASC)	Não
admin_update_event / admin_update_event_status / admin_delete_event	Advisory(
) 
 events(E) 
 ticket_batches(E, id ASC) 
 UPDATE/DELETE events(E)	Não
admin_save_ticket_batch / admin_delete_ticket_batch	Advisory(
) 
 events(E) 
 ticket_batches(E, id ASC) 
 INSERT/UPDATE/DELETE ticket_batches	Não
4. Máquina de Estados Final de orders e tickets
4.1. public.orders
order_status	payment_status	paid_at	Ingressos em public.tickets	Transições de Saída Permitidas
'pending'	'pending' ou 'in_process'	NULL	0 ingressos	
 'paid' / 'approved'
 'expired' / 'cancelled'
 'cancelled' / 'cancelled' ou 'rejected'
'paid'	'approved'	NOT NULL	Exatamente orders.quantity com status IN ('paid', 'used')	
 'refunded' / 'refunded' (somente se nenhum ingresso estiver 'used')
'expired'	'cancelled'	NULL	0 ingressos	Estado terminal (nenhuma)
'cancelled'	'cancelled' ou 'rejected'	NULL	0 ingressos	Estado terminal (nenhuma)
'refunded'	'refunded'	NOT NULL (preservado)	Exatamente orders.quantity com status = 'refunded' e used_at IS NULL	Estado terminal (nenhuma)
4.2. public.tickets
tickets.status	used_at	Estado Exigido do Pedido Pai	Elegível para Check-in?	Transições de Saída Permitidas
'paid' (inicial em INSERT)	NULL	order_status = 'paid', payment_status = 'approved'	Sim	
 'used' (via perform_ticket_checkin)
 'refunded' (via refund_ticket_order)
'used'	NOT NULL	order_status = 'paid', payment_status = 'approved'	Não (already_used)	Estado terminal (proibido reverter para 'paid' ou 'refunded')
'refunded'	NULL	order_status = 'refunded', payment_status = 'refunded'	Não (invalid)	Estado terminal (nenhuma)
5. Regras Finais de Contadores (reserved_quantity, sold_quantity, events.tickets_sold)
As invariantes verificadas ao final de cada transação pelo constraint trigger diferido enforce_event_inventory_reconciliation_deferred() são:
ticket_batches.reserved_quantity:
ticket_batches.sold_quantity:
events.tickets_sold:
Impacto por Operação:
Reserva (reserve_ticket_order): reserved_quantity += Q
Confirmação (confirm_order_payment): reserved_quantity -= Q, sold_quantity += Q, events.tickets_sold += Q
Expiração (release_expired_reservations) ou Cancelamento (cancel_ticket_order): reserved_quantity -= Q
Check-in (perform_ticket_checkin): não altera contadores de estoque (ingresso permanece vendido e consumido).
Reembolso Integral (refund_ticket_order): sold_quantity -= Q, events.tickets_sold -= Q, mantendo os Q registros em public.tickets com status = 'refunded'.
6. Lista de Arquivos Alterados
/supabase/migrations/002_rpc_contracts_permissions_idempotency.sql
/src/types/domain.ts
/src/utils/ticketRules.ts
/src/services/platformService.ts
/src/utils/ticketRules.test.ts
(O arquivo /supabase/migrations/001_initial_schema.sql permaneceu intacto e sem qualquer modificação).
7. Diff Completo das Alterações
7.1. /supabase/migrations/002_rpc_contracts_permissions_idempotency.sql
code
Diff
@@ -305,9 +305,11 @@
 UPDATE public.tickets t
 SET item_sequence = r.rn
 FROM (
   SELECT
     id AS ticket_id,
     ROW_NUMBER() OVER (PARTITION BY order_id ORDER BY created_at ASC, id ASC) AS rn
   FROM public.tickets
 ) r
-WHERE t.id = r.ticket_id;
+WHERE t.id = r.ticket_id
+  AND t.item_sequence IS NULL;
 
@@ -355,65 +357,91 @@
-  -- 2.7.a) Every paid order must have a total number of tickets equal to orders.quantity
+  -- 2.7.a) Every paid or refunded order must have a coherent set of tickets equal to orders.quantity
   SELECT
     o.id,
     o.order_status,
     o.payment_status,
     o.quantity,
-    COUNT(t.id) AS actual_tickets
+    COUNT(t.id) AS actual_tickets,
+    COUNT(t.id) FILTER (WHERE t.status IN ('paid', 'used')) AS active_paid_tickets,
+    COUNT(t.id) FILTER (WHERE t.status = 'refunded') AS refunded_tickets
   INTO v_bad_order
   FROM public.orders o
   LEFT JOIN public.tickets t ON t.order_id = o.id
-  WHERE o.order_status = 'paid'
+  WHERE o.order_status IN ('paid', 'refunded')
   GROUP BY o.id, o.order_status, o.payment_status, o.quantity
-  HAVING COUNT(t.id) <> o.quantity
+  HAVING (
+    o.order_status = 'paid'
+    AND (
+      COUNT(t.id) <> o.quantity
+      OR COUNT(t.id) FILTER (WHERE t.status IN ('paid', 'used')) <> o.quantity
+      OR COUNT(t.id) FILTER (WHERE t.status = 'refunded') > 0
+    )
+  ) OR (
+    o.order_status = 'refunded'
+    AND (
+      COUNT(t.id) <> o.quantity
+      OR COUNT(t.id) FILTER (WHERE t.status = 'refunded') <> o.quantity
+      OR COUNT(t.id) FILTER (WHERE t.status IN ('paid', 'used')) > 0
+    )
+  )
   LIMIT 1;
 
   IF FOUND THEN
     RAISE EXCEPTION
-      'Migration 002 aborted: paid order % has inconsistent ticket count (orders.quantity = %, actual tickets = %). Reconcile before applying migration.',
-      v_bad_order.id, v_bad_order.quantity, v_bad_order.actual_tickets;
+      'Migration 002 aborted: order % (status=%) has inconsistent tickets (orders.quantity = %, total tickets = %, active_paid = %, refunded = %). Reconcile before applying migration.',
+      v_bad_order.id, v_bad_order.order_status, v_bad_order.quantity, v_bad_order.actual_tickets, v_bad_order.active_paid_tickets, v_bad_order.refunded_tickets;
   END IF;
 
   -- 2.7.b) Every batch reserved_quantity must match the sum of active pending orders
   SELECT
     b.id AS batch_id,
     b.name AS batch_name,
     b.reserved_quantity,
     COALESCE(SUM(o.quantity) FILTER (
-      WHERE o.order_status = 'pending' AND o.payment_status <> 'approved'
+      WHERE o.order_status = 'pending' AND o.payment_status IN ('pending', 'in_process')
     ), 0) AS expected_reserved
   INTO v_bad_batch
   FROM public.ticket_batches b
   LEFT JOIN public.orders o ON o.ticket_batch_id = b.id
   GROUP BY b.id, b.name, b.reserved_quantity
   HAVING b.reserved_quantity <> COALESCE(SUM(o.quantity) FILTER (
-    WHERE o.order_status = 'pending' AND o.payment_status <> 'approved'
+    WHERE o.order_status = 'pending' AND o.payment_status IN ('pending', 'in_process')
   ), 0)
   LIMIT 1;
 
   -- 2.7.c) Every batch sold_quantity must match the sum of active paid orders (excluding refunded)
   SELECT
     b.id AS batch_id,
     b.name AS batch_name,
     b.sold_quantity,
-    COALESCE(SUM(o.quantity) FILTER (WHERE o.order_status = 'paid'), 0) AS expected_sold
+    COALESCE(SUM(o.quantity) FILTER (
+      WHERE o.order_status = 'paid' AND o.payment_status = 'approved'
+    ), 0) AS expected_sold
   INTO v_bad_batch
   FROM public.ticket_batches b
   LEFT JOIN public.orders o ON o.ticket_batch_id = b.id
   GROUP BY b.id, b.name, b.sold_quantity
-  HAVING b.sold_quantity <> COALESCE(SUM(o.quantity) FILTER (WHERE o.order_status = 'paid'), 0)
+  HAVING b.sold_quantity <> COALESCE(SUM(o.quantity) FILTER (
+    WHERE o.order_status = 'paid' AND o.payment_status = 'approved'
+  ), 0)
   LIMIT 1;
 
   -- 2.7.d) Every event tickets_sold must match both the sum of batch sold_quantity and sum of paid orders
   SELECT
     e.id AS event_id,
     e.title AS event_title,
     e.tickets_sold,
     COALESCE(b_agg.sum_batch_sold, 0) AS sum_batch_sold,
     COALESCE(o_agg.sum_order_sold, 0) AS sum_order_sold
   INTO v_bad_event
   FROM public.events e
   LEFT JOIN (
     SELECT event_id, SUM(sold_quantity) AS sum_batch_sold
     FROM public.ticket_batches
     GROUP BY event_id
   ) b_agg ON b_agg.event_id = e.id
   LEFT JOIN (
     SELECT event_id, SUM(quantity) AS sum_order_sold
     FROM public.orders
-    WHERE order_status = 'paid'
+    WHERE order_status = 'paid' AND payment_status = 'approved'
     GROUP BY event_id
   ) o_agg ON o_agg.event_id = e.id
   WHERE e.tickets_sold <> COALESCE(b_agg.sum_batch_sold, 0)
      OR e.tickets_sold <> COALESCE(o_agg.sum_order_sold, 0)
   LIMIT 1;
 
@@ -435,28 +463,37 @@
   SELECT
     o.id,
     o.order_status,
     o.payment_status,
     o.paid_at,
-    COUNT(t.id) AS ticket_count
+    COUNT(t.id) AS ticket_count,
+    COUNT(t.id) FILTER (WHERE t.status = 'refunded') AS refunded_ticket_count
   INTO v_invalid_order
   FROM public.orders o
   LEFT JOIN public.tickets t ON t.order_id = o.id
   GROUP BY o.id, o.order_status, o.payment_status, o.paid_at
   HAVING
     (o.order_status = 'pending' AND (
-      o.payment_status = 'approved'
+      o.payment_status NOT IN ('pending', 'in_process')
       OR o.paid_at IS NOT NULL
       OR COUNT(t.id) > 0
     ))
     OR (o.order_status = 'paid' AND (
       o.payment_status <> 'approved'
       OR o.paid_at IS NULL
+      OR COUNT(t.id) FILTER (WHERE t.status = 'refunded') > 0
     ))
-    OR (o.order_status IN ('expired', 'cancelled') AND (
-      o.payment_status = 'approved'
+    OR (o.order_status = 'expired' AND (
+      o.payment_status <> 'cancelled'
+      OR o.paid_at IS NOT NULL
       OR COUNT(t.id) > 0
     ))
+    OR (o.order_status = 'cancelled' AND (
+      o.payment_status NOT IN ('cancelled', 'rejected')
+      OR o.paid_at IS NOT NULL
+      OR COUNT(t.id) > 0
+    ))
+    OR (o.order_status = 'refunded' AND (
+      o.payment_status <> 'refunded'
+      OR o.paid_at IS NULL
+      OR COUNT(t.id) FILTER (WHERE t.status <> 'refunded') > 0
+    ))
   LIMIT 1;
 
@@ -512,35 +549,49 @@
--- 2.10. Unified Lock Hierarchy, Capacity Triggers, Order Integrity & Deferred Counter Reconciliation
---
--- Lock Acquisition Order Across All Inventory Flows (Deadlock Prevention):
+-- 2.10. Unified Lock Hierarchy, Capacity Triggers, Order/Ticket State Machine & Deferred Counter Reconciliation
+--
+-- CRITICAL ARCHITECTURAL NOTE ON POSTGRESQL LOCK ORDERING (A-01):
+-- In PostgreSQL (`ExecUpdate` / `ExecDelete` inside `nodeModifyTable.c`), a direct `UPDATE`
+-- or `DELETE` statement acquires the row-level tuple lock on the target row BEFORE firing
+-- `BEFORE EACH ROW` triggers (except when concurrent updates require EvalPlanQual refetch,
+-- where the tuple lock is still taken before the trigger runs on the refetched tuple).
+-- Therefore, `pg_advisory_xact_lock` inside a `BEFORE UPDATE/DELETE` trigger on `ticket_batches`
+-- or `events` is acquired AFTER the target row tuple lock if the caller issued a bare SQL
+-- `UPDATE`/`DELETE`.
+--
+-- To guarantee a strict, cycle-free lock acquisition order across ALL concurrent flows:
+--   1. ALL inventory & administrative write operations MUST enter through the transactional
+--      RPCs (`reserve_ticket_order`, `confirm_order_payment`, `release_expired_reservations`,
+--      `cancel_ticket_order`, `refund_ticket_order`, `admin_update_event`,
+--      `admin_update_event_status`, `admin_delete_event`, `admin_save_ticket_batch`,
+--      `admin_delete_ticket_batch`).
+--   2. Each RPC acquires locks in the exact canonical hierarchy BEFORE executing any DML:
 --   Step 1: Transaction-scoped advisory lock per event:
 --           PERFORM pg_advisory_xact_lock(hashtext('px_event_inventory'), hashtext(v_event_id::text));
 --   Step 2: Parent event row lock:
 --           SELECT ... FROM public.events WHERE id = v_event_id FOR UPDATE;
 --   Step 3: Child batch rows lock in deterministic primary-key order:
 --           SELECT ... FROM public.ticket_batches WHERE event_id = v_event_id ORDER BY id ASC FOR UPDATE;
 --   Step 4: Order rows lock in deterministic primary-key order (when applicable):
 --           SELECT ... FROM public.orders ... ORDER BY id ASC FOR UPDATE;
+--   Step 5: Ticket rows lock in deterministic sequence order (when applicable):
+--           SELECT ... FROM public.tickets WHERE order_id = v_order_id ORDER BY item_sequence ASC FOR UPDATE;
 
@@ -715,76 +766,144 @@
--- 2.10.C) Trigger on public.orders to protect immutable fields and enforce state machine
+-- 2.10.C) Trigger on public.orders to protect immutable fields and enforce coherent state machine
 CREATE OR REPLACE FUNCTION public.enforce_orders_integrity()
 RETURNS TRIGGER
 LANGUAGE plpgsql
 SET search_path = public
 AS $$
 DECLARE
   v_ticket_count INTEGER;
+  v_used_ticket_count INTEGER;
 BEGIN
   IF TG_OP = 'DELETE' THEN
-    IF EXISTS (SELECT 1 FROM public.tickets t WHERE t.order_id = OLD.id) THEN
-      RAISE EXCEPTION 'Cannot delete order % because issued tickets already exist for it.', OLD.id;
-    END IF;
-    IF OLD.order_status IN ('pending', 'paid') THEN
-      RAISE EXCEPTION 'Cannot delete order % while order_status is %. Cancel or expire the order cleanly first.', OLD.id, OLD.order_status;
-    END IF;
-    RETURN OLD;
+    RAISE EXCEPTION 'Deleting rows from public.orders is forbidden (order %). Preserve historical order records and use status transitions (cancelled, expired, refunded).', OLD.id;
   END IF;
 
   IF TG_OP = 'INSERT' THEN
     IF NEW.order_status <> 'pending' THEN
       RAISE EXCEPTION 'New orders must start with order_status = pending (got %).', NEW.order_status;
     END IF;
-    IF NEW.payment_status = 'approved' OR NEW.paid_at IS NOT NULL THEN
-      RAISE EXCEPTION 'New orders cannot be inserted as already approved/paid.';
+    IF NEW.payment_status NOT IN ('pending', 'in_process') OR NEW.paid_at IS NOT NULL THEN
+      RAISE EXCEPTION 'New orders must start with payment_status IN (pending, in_process) and paid_at IS NULL.';
     END IF;
     RETURN NEW;
   END IF;
 
-  -- TG_OP = 'UPDATE': protect immutable structural & financial columns
+  -- TG_OP = 'UPDATE': protect immutable structural & financial columns
   IF NEW.id IS DISTINCT FROM OLD.id
      OR NEW.user_id IS DISTINCT FROM OLD.user_id
      OR NEW.event_id IS DISTINCT FROM OLD.event_id
      OR NEW.ticket_batch_id IS DISTINCT FROM OLD.ticket_batch_id
      OR NEW.quantity IS DISTINCT FROM OLD.quantity
      OR NEW.unit_price IS DISTINCT FROM OLD.unit_price
      OR NEW.subtotal_amount IS DISTINCT FROM OLD.subtotal_amount
      OR NEW.fee_amount IS DISTINCT FROM OLD.fee_amount
      OR NEW.total_amount IS DISTINCT FROM OLD.total_amount
      OR NEW.created_at IS DISTINCT FROM OLD.created_at THEN
     RAISE EXCEPTION 'Immutable order fields (id, user_id, event_id, ticket_batch_id, quantity, unit_price, subtotal_amount, fee_amount, total_amount, created_at) cannot be modified after creation.';
   END IF;
 
-  -- Enforce coherent status combinations
+  -- Enforce coherent status matrix:
+  --   1. pending   -> payment_status IN ('pending', 'in_process'), paid_at IS NULL, 0 tickets
+  --   2. paid      -> payment_status = 'approved', paid_at IS NOT NULL
+  --   3. expired   -> payment_status = 'cancelled', paid_at IS NULL, 0 tickets
+  --   4. cancelled -> payment_status IN ('cancelled', 'rejected'), paid_at IS NULL, 0 tickets
+  --   5. refunded  -> payment_status = 'refunded', paid_at IS NOT NULL (preserved from payment confirmation)
   IF NEW.order_status = 'pending' THEN
-    IF NEW.payment_status = 'approved' OR NEW.paid_at IS NOT NULL THEN
-      RAISE EXCEPTION 'Order % with order_status = pending cannot have payment_status = approved or paid_at set.', NEW.id;
+    IF NEW.payment_status NOT IN ('pending', 'in_process') OR NEW.paid_at IS NOT NULL THEN
+      RAISE EXCEPTION 'Order % with order_status = pending must have payment_status IN (pending, in_process) and paid_at IS NULL.', NEW.id;
     END IF;
   ELSIF NEW.order_status = 'paid' THEN
     IF NEW.payment_status <> 'approved' OR NEW.paid_at IS NULL THEN
       RAISE EXCEPTION 'Order % with order_status = paid must have payment_status = approved and non-null paid_at.', NEW.id;
     END IF;
-  ELSIF NEW.order_status IN ('expired', 'cancelled') THEN
-    IF NEW.payment_status = 'approved' THEN
-      RAISE EXCEPTION 'Order % with order_status = % cannot have payment_status = approved.', NEW.id, NEW.order_status;
+  ELSIF NEW.order_status = 'expired' THEN
+    IF NEW.payment_status <> 'cancelled' OR NEW.paid_at IS NOT NULL THEN
+      RAISE EXCEPTION 'Order % with order_status = expired must have payment_status = cancelled and paid_at IS NULL.', NEW.id;
     END IF;
+  ELSIF NEW.order_status = 'cancelled' THEN
+    IF NEW.payment_status NOT IN ('cancelled', 'rejected') OR NEW.paid_at IS NOT NULL THEN
+      RAISE EXCEPTION 'Order % with order_status = cancelled must have payment_status IN (cancelled, rejected) and paid_at IS NULL.', NEW.id;
+    END IF;
+  ELSIF NEW.order_status = 'refunded' THEN
+    IF NEW.payment_status <> 'refunded' OR NEW.paid_at IS NULL THEN
+      RAISE EXCEPTION 'Order % with order_status = refunded must have payment_status = refunded and preserve non-null paid_at.', NEW.id;
+    END IF;
   END IF;
 
-  -- Prevent invalid state transitions
-  IF OLD.order_status = 'paid' AND NEW.order_status <> 'paid' THEN
-    RAISE EXCEPTION 'Order % is already paid and cannot transition to % without a dedicated refund workflow.', NEW.id, NEW.order_status;
+  -- Enforce valid state transitions:
+  --   pending   -> pending | paid | expired | cancelled
+  --   paid      -> paid | refunded
+  --   expired   -> expired (terminal)
+  --   cancelled -> cancelled (terminal)
+  --   refunded  -> refunded (terminal)
+  IF OLD.order_status = 'pending' AND NEW.order_status NOT IN ('pending', 'paid', 'expired', 'cancelled') THEN
+    RAISE EXCEPTION 'Order % cannot transition directly from pending to %.', NEW.id, NEW.order_status;
   END IF;
 
+  IF OLD.order_status = 'paid' AND NEW.order_status NOT IN ('paid', 'refunded') THEN
+    RAISE EXCEPTION 'Order % is already paid and can only transition to refunded (got %).', NEW.id, NEW.order_status;
+  END IF;
+
   IF OLD.order_status IN ('expired', 'cancelled') AND NEW.order_status <> OLD.order_status THEN
-    RAISE EXCEPTION 'Order % is in terminal status % and cannot transition to %.', NEW.id, OLD.order_status, NEW.order_status;
+    RAISE EXCEPTION 'Order % is in terminal status % and cannot transition to %.', NEW.id, OLD.order_status, NEW.order_status;
   END IF;
 
-  IF NEW.order_status <> 'paid' THEN
+  IF OLD.order_status = 'refunded' AND NEW.order_status <> 'refunded' THEN
+    RAISE EXCEPTION 'Order % is in terminal status refunded and cannot transition to %.', NEW.id, NEW.order_status;
+  END IF;
+
+  IF OLD.paid_at IS NOT NULL AND NEW.paid_at IS DISTINCT FROM OLD.paid_at THEN
+    RAISE EXCEPTION 'Order % paid_at timestamp is immutable once set.', NEW.id;
+  END IF;
+
+  IF NEW.order_status IN ('pending', 'expired', 'cancelled') THEN
     SELECT COUNT(*) INTO v_ticket_count
     FROM public.tickets t
     WHERE t.order_id = NEW.id;
 
     IF v_ticket_count > 0 THEN
       RAISE EXCEPTION 'Order % cannot have order_status = % while % issued ticket(s) exist.', NEW.id, NEW.order_status, v_ticket_count;
     END IF;
   END IF;
 
+  IF NEW.order_status = 'refunded' THEN
+    SELECT
+      COUNT(*),
+      COUNT(*) FILTER (WHERE t.status = 'used' OR t.used_at IS NOT NULL)
+    INTO v_ticket_count, v_used_ticket_count
+    FROM public.tickets t
+    WHERE t.order_id = NEW.id;
+
+    IF v_ticket_count <> NEW.quantity THEN
+      RAISE EXCEPTION 'Order % cannot be marked as refunded because ticket count (%) does not match order quantity (%). Partial refunds are not allowed.', NEW.id, v_ticket_count, NEW.quantity;
+    END IF;
+
+    IF v_used_ticket_count > 0 THEN
+      RAISE EXCEPTION 'Order % cannot be refunded because % ticket(s) have already been used at check-in.', NEW.id, v_used_ticket_count;
+    END IF;
+  END IF;
+
   RETURN NEW;
 END;
 $$;
 
--- 2.10.D) Trigger on public.tickets to ensure tickets only exist for paid orders
+-- 2.10.D) Trigger on public.tickets to enforce ticket immutability, check-in finality, and order state alignment
 CREATE OR REPLACE FUNCTION public.enforce_ticket_order_integrity()
 RETURNS TRIGGER
 LANGUAGE plpgsql
 SET search_path = public
 AS $$
 DECLARE
   v_order RECORD;
 BEGIN
+  IF TG_OP = 'DELETE' THEN
+    RAISE EXCEPTION 'Deleting rows from public.tickets is forbidden (ticket %). Preserve issued ticket history and use status = refunded when applicable.', OLD.id;
+  END IF;
+
   SELECT id, event_id, ticket_batch_id, user_id, order_status, payment_status, quantity
   INTO v_order
   FROM public.orders
   WHERE id = NEW.order_id;
 
   IF NOT FOUND THEN
     RAISE EXCEPTION 'Ticket references non-existent order %.', NEW.order_id;
   END IF;
 
-  IF v_order.order_status <> 'paid' OR v_order.payment_status <> 'approved' THEN
-    RAISE EXCEPTION 'Tickets can only be created or updated for paid/approved orders (order % has order_status=%, payment_status=%).',
-      NEW.order_id, v_order.order_status, v_order.payment_status;
-  END IF;
-
   IF NEW.event_id <> v_order.event_id OR NEW.ticket_batch_id <> v_order.ticket_batch_id OR NEW.user_id IS DISTINCT FROM v_order.user_id THEN
     RAISE EXCEPTION 'Ticket % attributes (event_id, ticket_batch_id, user_id) do not match parent order %.',
       NEW.id, NEW.order_id;
   END IF;
 
   IF NEW.item_sequence < 1 OR NEW.item_sequence > v_order.quantity THEN
     RAISE EXCEPTION 'Ticket item_sequence (%) is out of bounds for order % (quantity = %).',
       NEW.item_sequence, NEW.order_id, v_order.quantity;
   END IF;
 
+  IF TG_OP = 'INSERT' THEN
+    IF v_order.order_status <> 'paid' OR v_order.payment_status <> 'approved' THEN
+      RAISE EXCEPTION 'Tickets can only be created for paid/approved orders (order % has order_status=%, payment_status=%).',
+        NEW.order_id, v_order.order_status, v_order.payment_status;
+    END IF;
+
+    IF NEW.status <> 'paid' OR NEW.used_at IS NOT NULL THEN
+      RAISE EXCEPTION 'Newly issued tickets must start with status = paid and used_at IS NULL (got status=%).', NEW.status;
+    END IF;
+
+    RETURN NEW;
+  END IF;
+
+  -- TG_OP = 'UPDATE': protect immutable structural and identity columns
+  IF NEW.id IS DISTINCT FROM OLD.id
+     OR NEW.order_id IS DISTINCT FROM OLD.order_id
+     OR NEW.event_id IS DISTINCT FROM OLD.event_id
+     OR NEW.ticket_batch_id IS DISTINCT FROM OLD.ticket_batch_id
+     OR NEW.user_id IS DISTINCT FROM OLD.user_id
+     OR NEW.holder_name IS DISTINCT FROM OLD.holder_name
+     OR NEW.holder_email IS DISTINCT FROM OLD.holder_email
+     OR NEW.code IS DISTINCT FROM OLD.code
+     OR NEW.qr_payload IS DISTINCT FROM OLD.qr_payload
+     OR NEW.item_sequence IS DISTINCT FROM OLD.item_sequence
+     OR NEW.created_at IS DISTINCT FROM OLD.created_at THEN
+    RAISE EXCEPTION 'Immutable ticket fields (id, order_id, event_id, ticket_batch_id, user_id, holder_name, holder_email, code, qr_payload, item_sequence, created_at) cannot be modified after issuance.';
+  END IF;
+
+  -- Once a ticket is used at check-in, it is strictly terminal (cannot revert to paid or refunded)
+  IF OLD.status = 'used' THEN
+    IF NEW.status <> 'used' OR NEW.used_at IS DISTINCT FROM OLD.used_at THEN
+      RAISE EXCEPTION 'Ticket % has already been used at check-in and cannot transition to % or have used_at modified.', OLD.id, NEW.status;
+    END IF;
+    RETURN NEW;
+  END IF;
+
+  -- Once a ticket is refunded, it is strictly terminal
+  IF OLD.status = 'refunded' THEN
+    IF NEW.status <> 'refunded' OR NEW.used_at IS NOT NULL THEN
+      RAISE EXCEPTION 'Ticket % is refunded and cannot transition to %.', OLD.id, NEW.status;
+    END IF;
+    RETURN NEW;
+  END IF;
+
+  -- Transitions from 'paid'
+  IF OLD.status = 'paid' THEN
+    IF NEW.status = 'paid' THEN
+      IF NEW.used_at IS NOT NULL THEN
+        RAISE EXCEPTION 'Ticket % with status = paid cannot have non-null used_at.', NEW.id;
+      END IF;
+    ELSIF NEW.status = 'used' THEN
+      IF NEW.used_at IS NULL THEN
+        RAISE EXCEPTION 'Ticket % transitioning to status = used must set a non-null used_at timestamp.', NEW.id;
+      END IF;
+      IF v_order.order_status <> 'paid' OR v_order.payment_status <> 'approved' THEN
+        RAISE EXCEPTION 'Ticket % can only be checked in when parent order % is paid/approved (got order_status=%, payment_status=%).',
+          NEW.id, NEW.order_id, v_order.order_status, v_order.payment_status;
+      END IF;
+    ELSIF NEW.status = 'refunded' THEN
+      IF NEW.used_at IS NOT NULL THEN
+        RAISE EXCEPTION 'Refunded ticket % cannot have non-null used_at.', NEW.id;
+      END IF;
+      IF v_order.order_status <> 'refunded' OR v_order.payment_status <> 'refunded' THEN
+        RAISE EXCEPTION 'Ticket % can only transition to status = refunded when parent order % is refunded (got order_status=%, payment_status=%).',
+          NEW.id, NEW.order_id, v_order.order_status, v_order.payment_status;
+      END IF;
+    ELSE
+      RAISE EXCEPTION 'Ticket % cannot transition from paid to %.', OLD.id, NEW.status;
+    END IF;
+  ELSE
+    RAISE EXCEPTION 'Ticket % in unexpected status % cannot be updated to %.', OLD.id, OLD.status, NEW.status;
+  END IF;
+
   RETURN NEW;
 END;
 $$;
 
 DROP TRIGGER IF EXISTS trg_tickets_enforce_order_integrity ON public.tickets;
 CREATE TRIGGER trg_tickets_enforce_order_integrity
-BEFORE INSERT OR UPDATE ON public.tickets
+BEFORE INSERT OR UPDATE OR DELETE ON public.tickets
 FOR EACH ROW
 EXECUTE FUNCTION public.enforce_ticket_order_integrity();
(Adicionalmente, na Seção 2.10.E foi adicionado trg_tickets_reconcile_counters_deferred e a reconciliação de orders refunded; na Seção 2.11 foi adicionado idx_orders_ticket_batch_id; nas Seções 3, 4 e 5 foi adicionado SET CONSTRAINTS ... trg_tickets_reconcile_counters_deferred DEFERRED; na Seção 6 perform_ticket_checkin foi fortalecido para bloquear ingressos refunded/cancelled/expired; e na Seção 9 foram adicionadas as subseções 9.B, 9.C, 9.D e 9.E com admin_update_event, admin_update_event_status, admin_delete_event, admin_save_ticket_batch, admin_delete_ticket_batch, cancel_ticket_order, refund_ticket_order, public.audit_logs e record_late_payment_incident).
7.2. /src/types/domain.ts, /src/utils/ticketRules.ts, /src/services/platformService.ts e /src/utils/ticketRules.test.ts
/src/types/domain.ts: Adicionadas as interfaces DbAuditLogRow, CancelTicketOrderRpcArgs, CancelTicketOrderRpcPayload, RefundTicketOrderRpcArgs, RefundTicketOrderRpcPayload, RecordLatePaymentIncidentRpcArgs, RecordLatePaymentIncidentRpcPayload e AdminSaveTicketBatchInput.
/src/utils/ticketRules.ts:
Atualizado verifyAndProcessCheckin para tratar ticket.status === 'refunded' | 'cancelled' | 'expired' como result: 'invalid';
Atualizado auditDatabaseCountersIntegrity e evaluateOrderMutationIntegrity para suportar a máquina de estados completa com refunded e payment_status IN ('pending', 'in_process');
Adicionadas as funções puras evaluateTicketMutationIntegrity, evaluateOrderCancellation, evaluateOrderRefund e evaluateLatePaymentConciliation.
/src/services/platformService.ts:
Atualizadas updateEventInSupabase, updateEventStatusInSupabase e deleteEventInSupabase para chamar admin_update_event, admin_update_event_status e admin_delete_event;
Adicionadas saveTicketBatchInSupabase, deleteTicketBatchInSupabase, cancelOrderInSupabase e refundOrderInSupabase.
/src/utils/ticketRules.test.ts:
Atualizado o teste 28 e adicionados os testes 29, 30 e 31 cobrindo cancelamento, reembolso integral, bloqueio de reembolso parcial/pós-check-in, imutabilidade de ingressos, bloqueio de check-in de ingresso reembolsado e conciliação de pagamento tardio.
8. Resultado Real dos Testes Executados
Verificação Executada	Comando	Resultado Real
Testes Automatizados de Regras e Contratos	npx tsx --test src/utils/ticketRules.test.ts	31 de 31 testes aprovados (pass 31, fail 0, ~787ms)
Verificação Estática de Tipos TypeScript	npx tsc --noEmit	0 erros
Build de Produção (Vite + PWA)	npm run build / compile_applet	Sucesso (✓ built in 755ms)
9. Limitações do que Não Pôde Ser Testado Localmente
Ausência de instância PostgreSQL no container local: Não há binários postgres, pg_ctl ou psql instalados neste ambiente de execução.
Consequentemente, os testes locais validaram 100% da lógica pura em TypeScript, tipagem estática, contratos de serviço e estrutura sintática/contratual do arquivo SQL, mas não executaram o código PL/pgSQL em um motor PostgreSQL real.
Em conformidade com a Regra Obrigatória 7, não declaramos os testes PostgreSQL como executados ou aprovados em banco real.
10. Riscos Residuais Ainda Abertos
Validação em motor PostgreSQL real (Staging): A execução real do parser PL/pgSQL, o comportamento de SET CONSTRAINTS ... DEFERRED dentro de funções SECURITY DEFINER e os testes de contenção multi-sessão precisam ser executados em um projeto/branch Supabase de homologação antes da produção.
Proibição de DML administrativo direto fora das RPCs: Se no futuro algum código ou script executar UPDATE/DELETE direto em public.events ou public.ticket_batches sem passar pelas RPCs admin_*, o PostgreSQL continuará adquirindo o tuple lock antes do trigger BEFORE ROW. Portanto, toda escrita administrativa da aplicação deve usar exclusivamente as RPCs admin_* criadas na Seção 9.B.
Integração do webhook/backend para chamar record_late_payment_incident e refund_ticket_order: As RPCs e funções de domínio já estão prontas; quando o endpoint de webhook do Mercado Pago for conectado em produção, ele deve invocar record_late_payment_incident ao capturar erro de pedido expirado/cancelado com pagamento approved, e refund_ticket_order ao processar notificações de estorno (status = 'refunded' / charged_back).
11. Checklist Objetivo de Homologação em Staging (PostgreSQL Real)
Antes de aplicar em produção, execute em banco PostgreSQL/Supabase de staging:
Aplicação limpa da Migration 002 sobre a Migration 001:
Executar 001_initial_schema.sql seguido de 002_rpc_contracts_permissions_idempotency.sql e confirmar COMMIT sem erros.
Teste de Concorrência (2 sessões psql simultâneas):
Sessão A: BEGIN; SELECT public.reserve_ticket_order(...); (segurar antes do COMMIT).
Sessão B: SELECT public.admin_save_ticket_batch(...); ou SELECT public.admin_update_event(...);.
Confirmar que a Sessão B aguarda de forma serializada no pg_advisory_xact_lock e não ocorre erro 40P01 (deadlock detected).
Teste de Ciclo Completo de Reserva 
 Confirmação 
 Check-in 
 Tentativa de Reembolso:
Reservar pedido (
), confirmar pagamento via confirm_order_payment, realizar check-in de 1 ingresso via perform_ticket_checkin e tentar executar refund_ticket_order 
 deve falhar bloqueando reembolso de pedido com ingresso já utilizado.
Teste de Ciclo Reserva 
 Confirmação 
 Reembolso Integral 
 Tentativa de Check-in:
Reservar pedido (
), confirmar pagamento, executar refund_ticket_order 
 verificar que orders.order_status = 'refunded', os 2 ingressos têm status = 'refunded', sold_quantity e events.tickets_sold reduziram em 2, e perform_ticket_checkin retorna valid = false, result = 'invalid'.
Teste de Pagamento Tardio Após Expiração:
Criar reserva, expirar via release_expired_reservations(), tentar confirm_order_payment (deve recusar emissão de ingressos) e chamar record_late_payment_incident duas vezes com o mesmo mp_payment_id (confirmar registro único e idempotent = true na segunda chamada).
12. Parecer Final sobre Prontidão da Migration 002
Pronta para Homologação (Staging): SIM. Todos os problemas arquiteturais, de ordem de bloqueio (A-01), máquina de estados de cancelamento/reembolso (A-02/M-01), pré-auditoria (M-02), índice de performance (M-03), triggers diferidos em tickets (M-04) e incidente de pagamento tardio (B-01) foram resolvidos de forma coesa e revisável.
Pronta para Produção Imediata sem Homologação em Banco Real: NÃO. A aplicação no Supabase de produção somente deve ser autorizada após a aprovação dos 5 itens do Checklist de Homologação (Seção 11) em uma instância PostgreSQL real de teste/staging.
flag
Checkpoint
