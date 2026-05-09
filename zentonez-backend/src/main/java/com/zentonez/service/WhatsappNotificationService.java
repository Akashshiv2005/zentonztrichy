package com.zentonez.service;

import com.zentonez.model.Contact;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.server.ResponseStatusException;

import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class WhatsappNotificationService {

    private final RestClient restClient;
    private final String phoneNumberId;
    private final String recipientPhoneNumber;
    private final boolean enabled;

    public WhatsappNotificationService(
            RestClient.Builder restClientBuilder,
            @Value("${whatsapp.api.base-url:https://graph.facebook.com}") String apiBaseUrl,
            @Value("${whatsapp.api.version:v22.0}") String apiVersion,
            @Value("${whatsapp.phone-number-id:}") String phoneNumberId,
            @Value("${whatsapp.access-token:}") String accessToken,
            @Value("${whatsapp.recipient-phone-number:}") String recipientPhoneNumber,
            @Value("${whatsapp.enabled:false}") boolean enabled
    ) {
        this.restClient = restClientBuilder
                .baseUrl(apiBaseUrl + "/" + apiVersion)
                .defaultHeader("Authorization", "Bearer " + accessToken)
                .build();
        this.phoneNumberId = phoneNumberId;
        this.recipientPhoneNumber = recipientPhoneNumber;
        this.enabled = enabled;
    }

    public void sendContactNotification(Contact contact) {
        if (!enabled) {
            return;
        }

        if (phoneNumberId == null || phoneNumberId.isBlank() ||
                recipientPhoneNumber == null || recipientPhoneNumber.isBlank()) {
            throw new ResponseStatusException(
                    org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR,
                    "WhatsApp is enabled but not configured correctly."
            );
        }

        Map<String, Object> payload = new LinkedHashMap<>();
        payload.put("messaging_product", "whatsapp");
        payload.put("to", recipientPhoneNumber);
        payload.put("type", "text");
        payload.put("text", Map.of("preview_url", false, "body", buildMessage(contact)));

        try {
            restClient.post()
                    .uri("/{phoneNumberId}/messages", phoneNumberId)
                    .body(payload)
                    .retrieve()
                    .toBodilessEntity();
        } catch (Exception ex) {
            throw new ResponseStatusException(
                    HttpStatusCode.valueOf(502),
                    "Contact saved, but WhatsApp delivery failed.",
                    ex
            );
        }
    }

    private String buildMessage(Contact contact) {
        return String.join("\n",
                "New contact form submission",
                "Name: " + safe(contact.getName()),
                "Email: " + safe(contact.getEmail()),
                "Phone: " + safe(contact.getPhone()),
                "Service: " + safe(contact.getService()),
                "Message: " + safe(contact.getMessage())
        );
    }

    private String safe(String value) {
        return value == null || value.isBlank() ? "-" : value;
    }
}
