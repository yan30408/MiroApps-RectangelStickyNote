export async function init() {
    miro.board.ui.on('icon:click', async () => {
        await miro.board.ui.openPanel({ url: 'app.html' });
    });
    miro.board.ui.on('items:create', async (event) => {
        var str = localStorage.getItem("RectangleStickyNoteSetting")
        const enabled = JSON.parse(str.toLowerCase());

        if (!enabled) {
            return
        }
        console.log('Subscribed to the creation of new board items', event);
        console.log(event.items);

        const createdItems = event.items;

        // Filter sticky notes from the created items.
        const stickyNotes = createdItems.filter((item) => item.type === 'sticky_note');

        // Change the fill color of the sticky notes.
        for (const stickyNote of stickyNotes) {
            stickyNote.shape = 'rectangle';
            await stickyNote.sync();
        }
    });
}

init(); 
