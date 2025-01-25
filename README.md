# Tamagotchi

Welcome to the **Tamagotchi Retro Virtual Pet App**! This app brings back the nostalgia of virtual pets, revamped with a retro vibe and interactive AI features. Care for your pixelated companion, customize its look, and enjoy a fully immersive experience!  

---

## **Features**
### Pages  
1. **Landing Page**  
   - A warm, retro-style introduction to the app.  

2. **Pet Creation & Customization Form**  
   - Create your pet by naming it and selecting traits like color, type, and personality.  
   - Retro-styled form design using **Tailwind CSS**.  
   - **Live Preview** of your pet updates as you customize.  

3. **Main Dashboard**  
   - Track your pet’s stats:  
     - Health  
     - Hunger  
     - Happiness  
   - Perform actions like **Feed**, **Play**, and **Sleep**.  
   - Dynamic pet animations that reflect mood or actions.  

4. **Customization Screen & Settings**  
   - Rename your pet or adjust its attributes.  
   - Modify sound, notification preferences, and app settings.  

5. **Chat-Like Interaction**  
   - **Input Field**: Type commands or questions for your pet in a retro terminal-style box.  
   - **Message Display**: AI-generated responses from your pet in a chat bubble format.  
   - Retro sound effects for an immersive experience.  

---

## **Visual Design**
### Retro Styling  
- **Pixelated visuals** with Tailwind CSS.  
- Retro animations for activities like feeding and playing.  

### Pet Animations  
- Emotive animations for moods (e.g., happy, sad, tired).  

### Responsive Design  
- Fully optimized for mobile and desktop screens.  

---

## **API Integration**
- Fetch pet stats and updates from the backend.  
- Send user actions (like feeding) to the backend for processing.  
- Display AI-generated responses from the pet in the chat interface.  

---

## **Technologies Used**
- **Frontend**: React + Tailwind CSS  
- **Backend**: Flask + MongoDB   
- **AI Model**: GPT-3 or GPT-Neo for pet personality and dialogue generation  
---

## **Getting Started**
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/focusedaf/Tamagotchi.git
   cd Tamagotchi
   ```
2. **Install Dependencies**  
   ```bash
   npm install       # For frontend  
   pip install -r requirements.txt  # For backend  
   ```
3. **Run the App**  
   - **Frontend**:  
     ```bash
     npm run dev
     ```  
   - **Backend**:  
     ```bash
     flask run
     ```  
4. Open `http://localhost:3000` in your browser to start interacting with your virtual pet!  

---

Enjoy reliving the retro Tamagotchi experience! 🎮