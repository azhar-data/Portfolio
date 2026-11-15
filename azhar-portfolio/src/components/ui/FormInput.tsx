import React from 'react'

interface FormInputProps {
  label: string
  error?: string
  required?: boolean
  children: React.ReactElement<{ id?: string; 'aria-invalid'?: boolean | 'true' | 'false'; 'aria-describedby'?: string }>
}

export function FormInput({ label, error, required, children }: FormInputProps) {
  const child = React.Children.only(children)
  const inputId = child.props.id ?? ''
  const errorId = error ? `${inputId}-error` : undefined

  const enhancedChild = React.cloneElement(child, {
    'aria-invalid': error ? ('true' as const) : ('false' as const),
    ...(errorId ? { 'aria-describedby': errorId } : {}),
  })

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="text-sm text-[#94A3B8] mb-1 flex items-center gap-1"
      >
        {label}
        {required && (
          <span className="text-blue-400" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {enhancedChild}

      {error && (
        <p id={errorId} role="alert" className="text-red-400 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  )
}
