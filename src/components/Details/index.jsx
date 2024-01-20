import React from 'react';
import { View, Text, Image } from 'react-native';
import { DetailsStyles } from './DetailsStyles';
import { Table, Row } from 'react-native-table-component';

export default function Details({ selectedPokemon }) {
    const styles = DetailsStyles;
    const tableHead = []
    const tableData = [
        ['Type', `${selectedPokemon?.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ')}`],
        ['Attack', `${selectedPokemon?.stats[1].base_stat}`],
        ['Defense', `${selectedPokemon?.stats[2].base_stat}`],
        ['HP', `${selectedPokemon?.stats[0].base_stat}`],
        ['SP Attack', `${selectedPokemon?.stats[3].base_stat}`],
        ['SP Defense', `${selectedPokemon?.stats[4].base_stat}`],
        ['Speed', `${selectedPokemon?.stats[5].base_stat}`],
        ['Weight', `${selectedPokemon?.weight}`],
        ['Total moves', `${selectedPokemon?.moves.length}`],
    ];

    return (
        <View style={styles.detailsContainer}>
            {selectedPokemon ? (
                <>
                    <Image
                        source={{
                            uri: selectedPokemon.sprites.other['official-artwork'].front_default
                        }}
                        style={styles.detailsImage}
                    />
                    <Text style={styles.detailsName}>{`${selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)} #${String(selectedPokemon.id).padStart(3, '0')} `}</Text>
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#000000' }}>
                        <Row data={tableHead} style={styles.tableHead} />
                        {tableData.map((rowData, index) => (
                            <Row
                                key={index}
                                data={rowData}
                                style={styles.tableRow}
                                textStyle={styles.rowDataText}
                                flexArr={[2, 1]}
                            />
                        ))}
                    </Table>
                </>
            ) : (
                <Text style={styles.noSelectionText}>No Pokemon selected</Text>
            )}
        </View>
    );
}
