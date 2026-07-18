#!/bin/bash
# ╔═══════════════════════════════════════════════════════════════╗
# ║        ZAI CMS - Desktop Launcher                            ║
# ║        Made by Zai Creations with Love ❤️                    ║
# ║        Quick launcher for Zai Education Hub CMS              ║
# ╚═══════════════════════════════════════════════════════════════╝

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CMS_PATH="$SCRIPT_DIR/zai_cms.py"

# Check if the CMS file exists
if [ ! -f "$CMS_PATH" ]; then
    # Try alternative path (if launched from Desktop)
    ALT_PATH="/home/kali/Zai_Co_AI_Master/sample model/zaieduhub/zai_cms.py"
    if [ -f "$ALT_PATH" ]; then
        CMS_PATH="$ALT_PATH"
        SCRIPT_DIR="$(dirname "$ALT_PATH")"
    else
        # Try multiple notification methods for better compatibility
        if command -v notify-send &>/dev/null; then
            notify-send --urgency=critical --icon=error "Zai CMS" "Could not find zai_cms.py!
Expected: $CMS_PATH"
        elif command -v xmessage &>/dev/null; then
            xmessage -center -title "Zai CMS Error" "File not found!
Expected: $CMS_PATH"
        elif command -v zenity &>/dev/null; then
            zenity --error --title="Zai CMS" --text="Could not find zai_cms.py!
Expected: $CMS_PATH" --width=400
        else
            echo "ERROR: Zai CMS file not found at: $CMS_PATH" >&2
        fi
        exit 1
    fi
fi

# Launch the CMS
cd "$SCRIPT_DIR"
python3 "$CMS_PATH"
