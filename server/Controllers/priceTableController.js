
const axios = require('axios');
const cheerio = require('cheerio');
const dotenv = require('dotenv');
dotenv.config();


exports.getPriceDetails= async (req, res) => {
    try {
        const  url = process.env.URL;
        const selector = 'table'
        
        if (!url) {
            return res.status(400).json({ error: 'URL parameter is required' });
        }

        // Fetch the HTML content
        const response = await axios.get(url,{
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
  }
});
        const html = response.data;

        // Load HTML into Cheerio
        const $ = cheerio.load(html);

        // Find all tables (or specific table if selector provided)
        const tables = [];

        $(selector).each((tableIndex, tableElement) => {
            const tableData = {
                caption: $(tableElement).find('caption').text().trim(),
                headers: [],
                rows: []
            };

            // Get headers (th cells)
            $(tableElement).find('tr').first().find('th').each((i, cell) => {
                tableData.headers.push($(cell).text().trim());
            });

            // If no th headers found, use first row as headers
            if (tableData.headers.length === 0) {
                $(tableElement).find('tr').first().find('td').each((i, cell) => {
                    tableData.headers.push($(cell).text().trim() || `Column ${i + 1}`);
                });
            }

            // Get all rows data
            $(tableElement).find('tr').each((rowIndex, rowElement) => {
                // Skip header row if we already processed th cells
                if (rowIndex === 0 && $(rowElement).find('th').length > 0) return;

                const rowData = {};
                $(rowElement).find('td').each((cellIndex, cellElement) => {
                    const header = tableData.headers[cellIndex] || `Column ${cellIndex + 1}`;
                    rowData[header] = $(cellElement).text().trim();
                });

                if (Object.keys(rowData).length > 0) {
                    tableData.rows.push(rowData);
                }
            });

            tables.push(tableData);
        });

        res.json({
            success: true,
            tablesCount: tables.length,
            tables:tables[0].rows
        });

    } catch (error) {
        console.error('Scraping error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            details: error.response?.data || 'No additional error details'
        });
    }
};
