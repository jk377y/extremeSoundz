## Key Features:

#### Appointment Scheduling:<br>
- Users (customers) can book installations for specific services.
- A calendar picker helps them choose available time slots.
- Admins can block out time for specific dates when no appointments are available.

#### Service Management:<br>
- Define services (e.g., stereo system, alarm system) with details like price, duration, and description.
- Admins can modify or add new services over time.

#### Customer Authentication & Authorization:<br>
- Users must sign up and log in to schedule, modify, or view their bookings.
- Admins have special privileges to view and manage all appointments, modify services, and access analytics.

#### Admin Dashboard with Analytics:<br>
- Visualizations for peak booking times, popular services, revenue from services, etc.
- View upcoming appointments and customer history.

#### Customer Reviews and Ratings:<br>
- After service completion, customers can leave reviews and ratings to provide feedback.

------------------------------------------------------------------------------------------------------------

## Database Items: MongoDB

#### Users Collection (Customers & Admins):<br>
- UserID (unique identifier)<br>
- First Name<br>
- Last Name<br>
- Phone Number (for contact)<br>
- Email (for contact/receipt and/or authentication)<br>
- Password (hashed for security/ JWT maybe?)<br>
- Role (customer or admin)<br>
- BookingHistory (array of appointment references, maybe by appointmentID)<br>

#### Appointments Collection:<br>
- AppointmentID (unique identifier)<br>
- CustomerID (reference to the user who booked / UserID)<br>
- ServiceID (reference to the type of service / ServiceID)<br>
- Date (chosen date of installation)<br>
- TimeSlot (start/end time)<br>
- Status (pending, confirmed, completed, canceled / drop down selection by admin?)<br>
- Notes (special instructions, tech assigned?)<br>

#### Services Collection:<br>
- ServiceID (unique identifier)<br>
- ServiceType (installation type / stereo, alarm, GPS, remote start / more than 1 selection chooseable)<br>
- Description (brief details about what’s included in each service)<br>
- Price (cost of service)<br>
- Duration (estimated time for install)<br>

#### Reviews Collection: (availble after completion/payment)<br>
- ReviewID (unique identifier)<br>
- CustomerID (reference to the user who left the review)<br>
- AppointmentID (reference to the completed service)<br>
- Rating (e.g., 1-5 stars)<br>
- Comment (written feedback from customer)<br>
- Date (date the review was left)<br>

#### Admin Dashboard Analytics Collection:<br>
- RevenueData (total income from services, possibly broken down by service type)<br>
- PopularServices (list of services sorted by number of bookings)<br>
- CustomerStatistics (e.g., number of repeat customers)<br>
- AppointmentTrends (graph data for peak times and dates)<br>