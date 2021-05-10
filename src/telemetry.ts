import { ZoneContextManager } from "@opentelemetry/context-zone"
import { registerInstrumentations } from "@opentelemetry/instrumentation"
import { DocumentLoadInstrumentation } from "@opentelemetry/instrumentation-document-load"
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch"
import { ConsoleSpanExporter, SimpleSpanProcessor } from "@opentelemetry/tracing"
import { WebTracerProvider } from "@opentelemetry/web"

const tracerProvider = new WebTracerProvider()
tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()))
registerInstrumentations({
    instrumentations: [new DocumentLoadInstrumentation(), new FetchInstrumentation()],
    tracerProvider,
})
tracerProvider.register({ contextManager: new ZoneContextManager() })