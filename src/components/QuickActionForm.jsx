import { createSetoran, getStudents } from '../services/dashboard'

const QuickActionForm = () => {
  const [students, setStudents] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    studentId: '',
    surah: '',
    quality: '',
    notes: '',
  })

  React.useEffect(() => {
    loadStudents()
  }, [])

  const loadStudents = async () => {
    setLoading(true)
    const data = await getStudents()
    setStudents(data)
    setLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.studentId || !formData.surah) return

    setSubmitting(true)
    try {
      await createSetoran({
        student_id: formData.studentId,
        teacher_id: 'current-user-id',
        surah_name: formData.surah,
        ayat_range: formData.surah,
        quality_rating: formData.quality,
        type: 'setoran',
        notes: formData.notes || null,
      })
      alert('Setoran berhasil disimpan!')
      setFormData({ studentId: '', surah: '', quality: '', notes: '' })
    } catch (error) {
      console.error('Error submitting setoran:', error)
      alert('Gagal menyimpan setoran. Silakan coba lagi.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0px_10px_15px_-3px_rgba(6,78,59,0.05)] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
      <h3 className="font-headline-md text-headline-md text-on-surface mb-6">New Entry</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="student">Student Name</label>
            <select
              className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-container/50 transition-all font-body-md text-body-md disabled:opacity-50"
              id="student"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              disabled={loading}
            >
              <option value="">Select a student...</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.full_name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="surah">Surah / Ayat</label>
            <input
              className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-container/50 transition-all font-body-md text-body-md"
              id="surah"
              placeholder="e.g., Al-Baqarah: 1-5"
              type="text"
              value={formData.surah}
              onChange={(e) => setFormData({ ...formData, surah: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-2">Quality Rating</label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'sangat_lancar', label: 'Sangat Lancar', class: 'badge-sangat-lancar' },
              { id: 'lancar', label: 'Lancar', class: 'badge-lancar' },
              { id: 'perlu_murajaah', label: "Perlu Muraja'ah", class: 'badge-perlu-murajaah' },
            ].map((option) => (
              <label key={option.id} className="cursor-pointer">
                <input
                  className="peer sr-only"
                  name="quality"
                  type="radio"
                  value={option.id}
                  checked={formData.quality === option.id}
                  onChange={(e) => setFormData({ ...formData, quality: e.target.value })}
                />
                <div
                  className={`px-4 py-2 rounded-full border font-label-md text-label-md transition-all duration-200 peer-checked:border-transparent hover:scale-105 ${
                    formData.quality === option.id
                      ? option.class
                      : 'border-outline-variant text-on-surface-variant hover:border-primary/30'
                  }`}
                >
                  {option.label}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="notes">Teacher Notes (Optional)</label>
          <textarea
            className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary focus:ring-2 focus:ring-secondary-container/50 transition-all font-body-md text-body-md resize-none"
            id="notes"
            placeholder="Add specific feedback on tajweed or fluency..."
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          ></textarea>
        </div>

        <div className="flex justify-end pt-2">
          <button
            className="bg-primary text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg hover:bg-primary-container transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={submitting || !formData.studentId || !formData.surah}
          >
            {submitting ? 'Submitting...' : 'Submit Entry'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default QuickActionForm
