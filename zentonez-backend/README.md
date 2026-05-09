# Zentonez Backend

Spring Boot + PostgreSQL backend for Contact and Reservation APIs.

## Prerequisites

- Java 17 → Download: https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html
- PostgreSQL → Download: https://www.postgresql.org/download/
- Maven (steps below)

## Install Maven (One Time Setup)

1. Download Maven zip from: https://maven.apache.org/download.cgi
   - Click **apache-maven-3.9.6-bin.zip**

2. Extract it to `C:\maven`
   - Final path should be: `C:\maven\apache-maven-3.9.6\bin\mvn.cmd spring-boot:run`

3. Add to PATH permanently — run this in PowerShell:
   ```powershell
   [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\maven\apache-maven-3.9.6\bin", "User")
   ```

4. Close and reopen PowerShell, then verify:
   ```powershell
   mvn -version
   ```
   You should see `Apache Maven 3.9.6`

## Database Setup

Open pgAdmin or psql and run:

```sql
CREATE DATABASE zentonez;
```

## Configuration

Update `src/main/resources/application.properties` with your PostgreSQL credentials:

```properties
spring.datasource.username=postgres
spring.datasource.password=your_password
```

To send contact form submissions directly to the owner's WhatsApp, also configure the WhatsApp Cloud API values:

```properties
whatsapp.enabled=true
whatsapp.phone-number-id=YOUR_META_PHONE_NUMBER_ID
whatsapp.access-token=YOUR_META_SYSTEM_USER_ACCESS_TOKEN
whatsapp.recipient-phone-number=91XXXXXXXXXX
```

Notes:
- `recipient-phone-number` must be in international format without `+`.
- If `whatsapp.enabled=false`, contact submissions are still saved to the database, but no WhatsApp message is sent.
- In WhatsApp Cloud API test mode, Meta only lets you send to verified recipient numbers.

## Run the Backend

**First time (or new terminal):**
```powershell
$env:PATH += ";C:\maven\apache-maven-3.9.6\bin"
```

**Then run:**
```powershell
mvn spring-boot:run
```

Or use full path directly:
```powershell
C:\maven\apache-maven-3.9.6\bin\mvn.cmd spring-boot:run
```

Server starts at: `http://localhost:8081`

## API Endpoints

### Contact
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/contact` | Submit contact form |

**Request Body:**
```json
{
  "name": "John",
  "phone": "9999999999",
  "address": "Chennai",
  "message": "Hello"
}
```

---

### Reservations
| Method | URL | Description |
|--------|-----|-------------|
| POST | `/api/reservations` | Create a booking |
| GET | `/api/reservations/booked-slots?service=hair-spa&date=2026-05-10` | Get booked slots |

**POST Request Body:**
```json
{
  "service": "hair-spa",
  "date": "2026-05-10",
  "time": "10:00 AM",
  "name": "John",
  "phone": "9999999999",
  "notes": "Optional notes"
}
```

**GET Response:**
```json
["09:00 AM", "11:00 AM"]
```

## Services Available
- `hair-spa` - Artisan Hair Spa
- `facial` - Premium Facial
- `skincare` - Skin Care Ritual
- `hair-styling` - Master Hair Styling
- `nails` - Designer Nails
- `manicure` - Luxury Manicure
- `pedicure` - Luxury Pedicure
- `lice-treatment` - Lice Treatment
- `bridal` - Bridal Makeup
