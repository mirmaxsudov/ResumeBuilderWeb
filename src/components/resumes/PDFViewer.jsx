import React from 'react'

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'red',   // Red page background
        padding: 30,
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        color: '#fff', // White text for contrast
    },
    text: {
        fontSize: 12,
        marginBottom: 8,
        color: '#fff', // White text for contrast
    },
});

const PDFViewer = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <PDFViewer style={{ width: '100%', height: '100%' }}>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View>
                            <Text style={styles.title}>Abdurahmon Mirmaxsudov</Text>
                            <Text style={styles.text}>Java Backend Developer</Text>
                        </View>
                        <View>
                            {/* <Text style={styles.text}>{veryLongText}</Text> */}
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>
    )
}

export default PDFViewer