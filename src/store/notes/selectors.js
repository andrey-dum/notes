import { createSelector } from 'reselect';


export const selectNotes = (state) => state.notes

export const selectNoteItems = createSelector(selectNotes, notes => notes.notes)
export const selectSelected = createSelector(selectNotes, notes => notes.selected)
export const selectShowAddForm = createSelector(selectNotes, notes => notes.showAddForm)
export const selectEditMode = createSelector(selectNotes, notes => notes.editMode)


