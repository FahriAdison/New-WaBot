
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';

function clearSessions(folder = 'sessions') {
    const filenames = readdirSync(folder).map(file => join(folder, file));
    return filenames.map(file => {
        const stats = statSync(file);
        if (stats.isFile() && Date.now() - stats.mtimeMs >= 1000 * 60 * 10) { // 10 menit
            console.log('Deleted sessions', file);
            unlinkSync(file);
            return true; // Mengembalikan true jika berhasil dihapus
        }
        return false;
    });
}

export default clearSessions; // Mengganti "handler" dengan "clearSessions"
